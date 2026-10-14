# -*- coding: utf-8 -*-
"""
AAA Visual Novel Audio Synthesizer
《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
Generates 6 full multi-layered stereo BGM tracks and 10 bespoke SFX in 44.1kHz 16-bit WAV.
"""

import os
import wave
import numpy as np

SR = 44100

NOTE_FREQS = {
    'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'Eb2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00, 'Ab2': 103.83, 'A2': 110.00, 'Bb2': 116.54, 'B2': 123.47,
    'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'Eb3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'Ab3': 207.65, 'A3': 220.00, 'Bb3': 233.08, 'B3': 246.94,
    'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'Ab4': 415.30, 'A4': 440.00, 'Bb4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'Eb5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'Ab5': 830.61, 'A5': 880.00, 'Bb5': 932.33, 'B5': 987.77,
    'C6': 1046.50, 'D6': 1174.66, 'E6': 1318.51, 'F6': 1396.91, 'G6': 1567.98, 'A6': 1760.00
}


def save_stereo_wav(filepath, left, right):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    peak = max(np.max(np.abs(left)), np.max(np.abs(right)), 1e-6)
    if peak > 0.95:
        left = left / peak * 0.92
        right = right / peak * 0.92
    stereo = np.empty((left.size + right.size,), dtype=np.int16)
    stereo[0::2] = np.clip(left * 32767, -32768, 32767).astype(np.int16)
    stereo[1::2] = np.clip(right * 32767, -32768, 32767).astype(np.int16)
    with wave.open(filepath, 'wb') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(SR)
        wf.writeframes(stereo.tobytes())


def apply_cathedral_reverb(left, right, decay=0.42, wet=0.35):
    delays_ms = [37, 61, 89, 127, 179, 251]
    out_l = left.copy()
    out_r = right.copy()
    for idx, d_ms in enumerate(delays_ms):
        d_samples = int(SR * d_ms / 1000.0)
        gain = (decay ** (idx + 1)) * wet
        if d_samples < len(left):
            if idx % 2 == 0:
                out_l[d_samples:] += left[:-d_samples] * gain
                out_r[d_samples:] += right[:-d_samples] * (gain * 0.9)
            else:
                out_l[d_samples:] += right[:-d_samples] * (gain * 0.9)
                out_r[d_samples:] += left[:-d_samples] * gain
    return out_l, out_r


def synth_music_box(freq, duration, amp=0.25):
    n = int(SR * duration)
    t = np.linspace(0, duration, n, endpoint=False)
    env = np.exp(-t * 3.8) * (1.0 - np.exp(-t * 180.0))
    chime_attack = np.exp(-t * 35.0) * np.sin(2 * np.pi * (freq * 4.0) * t) * 0.25
    wave_sig = (
        np.sin(2 * np.pi * freq * t) * 0.72
        + np.sin(2 * np.pi * (freq * 2.0) * t) * 0.22 * np.exp(-t * 5.0)
        + np.sin(2 * np.pi * (freq * 3.0) * t) * 0.08 * np.exp(-t * 8.0)
        + chime_attack
    )
    return wave_sig * env * amp


def synth_piano(freq, duration, amp=0.25):
    n = int(SR * duration)
    t = np.linspace(0, duration, n, endpoint=False)
    env = np.exp(-t * 2.1) * (1.0 - np.exp(-t * 120.0))
    # Slight detuning for rich grand piano unison strings
    sig = (
        np.sin(2 * np.pi * freq * t) * 0.60
        + np.sin(2 * np.pi * (freq * 1.0006) * t) * 0.25
        + np.sin(2 * np.pi * (freq * 2.0) * t) * 0.28 * np.exp(-t * 2.5)
        + np.sin(2 * np.pi * (freq * 3.0) * t) * 0.12 * np.exp(-t * 4.0)
        + np.sin(2 * np.pi * (freq * 4.0) * t) * 0.05 * np.exp(-t * 6.5)
    )
    return sig * env * amp


def synth_strings_pad(freq, duration, amp=0.16):
    n = int(SR * duration)
    t = np.linspace(0, duration, n, endpoint=False)
    attack = np.clip(t / min(0.45, duration * 0.35), 0.0, 1.0)
    release = np.clip((duration - t) / min(0.55, duration * 0.4), 0.0, 1.0)
    env = attack * release
    vibrato = np.sin(2 * np.pi * 5.2 * t) * (freq * 0.0035)
    f = freq + vibrato
    phase = 2 * np.pi * np.cumsum(f) / SR
    # Warm rich string harmonics
    sig = (
        np.sin(phase) * 0.50
        + np.sin(phase * 2.0 + 0.3) * 0.25
        + np.sin(phase * 3.0 + 0.7) * 0.14
        + np.sin(phase * 4.0 + 1.2) * 0.07
        + np.sin(2 * np.pi * (freq * 0.998) * t) * 0.30
    )
    return sig * env * amp


def synth_solo_violin(freq, duration, amp=0.22):
    n = int(SR * duration)
    t = np.linspace(0, duration, n, endpoint=False)
    attack = np.clip(t / min(0.18, duration * 0.25), 0.0, 1.0)
    release = np.clip((duration - t) / min(0.25, duration * 0.3), 0.0, 1.0)
    env = attack * release
    vib_depth = np.clip((t - 0.1) * 2.5, 0.0, 1.0) * (freq * 0.006)
    f = freq + np.sin(2 * np.pi * 5.8 * t) * vib_depth
    phase = 2 * np.pi * np.cumsum(f) / SR
    sig = (
        np.sin(phase) * 0.48
        + np.sin(phase * 2.0) * 0.30
        + np.sin(phase * 3.0) * 0.18
        + np.sin(phase * 4.0) * 0.09
        + np.sin(phase * 5.0) * 0.04
    )
    return sig * env * amp


def add_note(buf_l, buf_r, start_sec, sig, pan=0.0):
    idx = int(start_sec * SR)
    if idx >= len(buf_l):
        return
    end = min(len(buf_l), idx + len(sig))
    seg = sig[:end - idx]
    gain_l = np.cos((pan + 1.0) * np.pi / 4.0)
    gain_r = np.sin((pan + 1.0) * np.pi / 4.0)
    buf_l[idx:end] += seg * gain_l
    buf_r[idx:end] += seg * gain_r


def generate_bgm_01_pale_star_aria(out_dir):
    """Track 01: Aria of the Pale Star (Main Theme & Celestia's Theme) - D minor / F major"""
    dur = 32.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    # Subtle clockwork tick in background
    for beat in range(int(dur * 2)):
        t0 = beat * 0.5
        tick_len = int(0.025 * SR)
        tt = np.linspace(0, 0.025, tick_len)
        freq = 2800.0 if beat % 2 == 0 else 2100.0
        tick = np.sin(2 * np.pi * freq * tt) * np.exp(-tt * 160.0) * 0.035
        add_note(l, r, t0, tick, pan=-0.3 if beat % 2 == 0 else 0.3)

    # Chord progression: Dm -> Bb -> F -> C -> Dm -> Gm -> Asus4 -> A
    chords = [
        (['D3', 'A3', 'D4', 'F4'], 4.0),
        (['Bb2', 'F3', 'Bb3', 'D4'], 4.0),
        (['F2', 'C3', 'A3', 'C4'], 4.0),
        (['C3', 'G3', 'C4', 'E4'], 4.0),
        (['D3', 'A3', 'D4', 'F4'], 4.0),
        (['G2', 'D3', 'Bb3', 'D4'], 4.0),
        (['A2', 'E3', 'A3', 'D4'], 2.0),
        (['A2', 'E3', 'A3', 'C#4'], 2.0),
        (['D3', 'A3', 'D4', 'F4'], 4.0),
    ]
    t_cursor = 0.0
    for notes, cdur in chords:
        if t_cursor >= dur:
            break
        for idx, note in enumerate(notes):
            pad = synth_strings_pad(NOTE_FREQS[note], cdur + 0.4, amp=0.11)
            add_note(l, r, t_cursor, pad, pan=(idx - 1.5) * 0.25)
        # Piano arpeggio over the chord
        arp_notes = notes + [notes[2], notes[1], notes[3], notes[2]]
        step = cdur / len(arp_notes)
        for s_idx, anote in enumerate(arp_notes):
            p_sig = synth_piano(NOTE_FREQS[anote], step * 2.2, amp=0.15)
            add_note(l, r, t_cursor + s_idx * step, p_sig, pan=-0.2 + (s_idx % 3) * 0.2)
        t_cursor += cdur

    # Music Box & Violin Lead Melody
    melody = [
        (0.0, 'A5', 1.5), (1.5, 'G5', 0.5), (2.0, 'F5', 1.5), (3.5, 'E5', 0.5),
        (4.0, 'D5', 1.5), (5.5, 'F5', 0.5), (6.0, 'A5', 1.5), (7.5, 'Bb5', 0.5),
        (8.0, 'A5', 1.5), (9.5, 'G5', 0.5), (10.0, 'F5', 1.0), (11.0, 'C5', 1.0),
        (12.0, 'E5', 2.5), (14.5, 'F5', 0.5), (15.0, 'G5', 1.0),
        (16.0, 'A5', 1.5), (17.5, 'Bb5', 0.5), (18.0, 'C6', 1.5), (19.5, 'A5', 0.5),
        (20.0, 'Bb5', 1.5), (21.5, 'A5', 0.5), (22.0, 'G5', 1.5), (23.5, 'F5', 0.5),
        (24.0, 'E5', 2.0), (26.0, 'C#5', 1.5), (27.5, 'E5', 0.5),
        (28.0, 'D5', 3.5)
    ]
    for t0, note, mdur in melody:
        mb = synth_music_box(NOTE_FREQS[note], mdur + 0.6, amp=0.22)
        add_note(l, r, t0, mb, pan=0.15)
        if t0 >= 16.0:
            # Second half adds soaring solo violin an octave lower
            v_freq = NOTE_FREQS[note] * 0.5
            vio = synth_solo_violin(v_freq, mdur + 0.2, amp=0.18)
            add_note(l, r, t0, vio, pan=-0.2)

    l, r = apply_cathedral_reverb(l, r, decay=0.48, wet=0.40)
    save_stereo_wav(os.path.join(out_dir, 'bgm_01_pale_star_aria.wav'), l, r)


def generate_bgm_02_white_night_atelier(out_dir):
    """Track 02: White Night Atelier (Nocturnal Chamber Waltz in A minor, 3/4 time)"""
    dur = 27.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    # 3/4 waltz bars (1.5s per bar at 120 BPM)
    bars = [
        ('A2', ['E4', 'A4', 'C5'], ['E5', 'D5', 'C5']),
        ('A2', ['E4', 'A4', 'C5'], ['B4', 'C5', 'A4']),
        ('D3', ['F4', 'A4', 'D5'], ['F5', 'E5', 'D5']),
        ('D3', ['F4', 'A4', 'D5'], ['C5', 'B4', 'A4']),
        ('E2', ['E4', 'Ab4', 'B4'], ['B4', 'C5', 'D5']),
        ('E2', ['E4', 'Ab4', 'B4'], ['E5', 'D5', 'B4']),
        ('A2', ['E4', 'A4', 'C5'], ['C5', 'B4', 'A4']),
        ('E2', ['E4', 'Ab4', 'B4'], ['B4', None, None]),
        # Repeat with lush strings
        ('A2', ['E4', 'A4', 'C5'], ['A5', 'G5', 'F5']),
        ('G2', ['D4', 'G4', 'B4'], ['E5', 'D5', 'C5']),
        ('F2', ['C4', 'F4', 'A4'], ['D5', 'C5', 'B4']),
        ('E2', ['B3', 'E4', 'Ab4'], ['C5', 'B4', 'E5']),
        ('D3', ['F4', 'A4', 'D5'], ['F5', 'E5', 'D5']),
        ('E2', ['E4', 'Ab4', 'B4'], ['E5', 'D5', 'C5']),
        ('A2', ['E4', 'A4', 'C5'], ['B4', 'A4', 'Ab4']),
        ('A2', ['E4', 'A4', 'C5'], ['A4', None, None]),
    ]
    beat_dur = 0.5
    for b_idx, (bass, chord, mel) in enumerate(bars):
        t_bar = b_idx * 1.5
        if t_bar >= dur - 1.5:
            break
        # Beat 1: Bass piano note
        add_note(l, r, t_bar, synth_piano(NOTE_FREQS[bass], 1.4, amp=0.22), pan=-0.25)
        # Beats 2 & 3: Waltz accompaniment chords
        for c_note in chord:
            add_note(l, r, t_bar + beat_dur, synth_piano(NOTE_FREQS[c_note], 0.45, amp=0.10), pan=-0.1)
            add_note(l, r, t_bar + 2 * beat_dur, synth_piano(NOTE_FREQS[c_note], 0.45, amp=0.08), pan=-0.1)
        # Melody notes across 3 beats
        for m_idx, m_note in enumerate(mel):
            if m_note:
                m_sig = synth_piano(NOTE_FREQS[m_note], 0.85, amp=0.20)
                add_note(l, r, t_bar + m_idx * beat_dur, m_sig, pan=0.2)
                if b_idx >= 8:
                    v_sig = synth_solo_violin(NOTE_FREQS[m_note], 0.65, amp=0.14)
                    add_note(l, r, t_bar + m_idx * beat_dur, v_sig, pan=0.3)

    l, r = apply_cathedral_reverb(l, r, decay=0.38, wet=0.32)
    save_stereo_wav(os.path.join(out_dir, 'bgm_02_white_night_atelier.wav'), l, r)


def generate_bgm_03_sunken_zeroth_spire(out_dir):
    """Track 03: The Sunken Zeroth Spire (Mystical Ambient & Glass Harmonica in C minor)"""
    dur = 28.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    pad_chords = [
        (['C2', 'G2', 'C3', 'Eb3', 'G3'], 7.0),
        (['Ab2', 'Eb3', 'Ab3', 'C4', 'G4'], 7.0),
        (['Fm2' if 'Fm2' in NOTE_FREQS else 'F2', 'C3', 'F3', 'Ab3', 'C4'], 7.0),
        (['G2', 'D3', 'G3', 'B3', 'D4'], 7.0),
    ]
    for idx, (notes, cdur) in enumerate(pad_chords):
        t0 = idx * 7.0
        for n_i, note in enumerate(notes):
            sig = synth_strings_pad(NOTE_FREQS[note], cdur + 1.0, amp=0.11)
            add_note(l, r, t0, sig, pan=(n_i - 2) * 0.25)

    # Ethereal glass chimes & water-drop resonance
    bell_seq = [
        (0.5, 'G5'), (1.5, 'Eb5'), (2.5, 'C5'), (4.0, 'D5'), (5.5, 'Eb5'),
        (7.5, 'Ab5'), (8.5, 'G5'), (9.5, 'F5'), (11.0, 'Eb5'), (12.5, 'D5'),
        (14.5, 'F5'), (15.5, 'Eb5'), (16.5, 'D5'), (18.0, 'C5'), (19.5, 'G5'),
        (21.5, 'F5'), (22.5, 'Eb5'), (23.5, 'D5'), (25.0, 'B4'), (26.2, 'C5')
    ]
    for t0, note in bell_seq:
        sig = synth_music_box(NOTE_FREQS[note], 2.5, amp=0.20)
        add_note(l, r, t0, sig, pan=np.sin(t0) * 0.45)

    l, r = apply_cathedral_reverb(l, r, decay=0.58, wet=0.50)
    save_stereo_wav(os.path.join(out_dir, 'bgm_03_sunken_zeroth_spire.wav'), l, r)


def generate_bgm_04_dies_irae_blade(out_dir):
    """Track 04: Sword of Judgment : Dies Irae (High-Tension Battle / Confrontation Theme)"""
    dur = 24.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    # Fast 160 BPM driving ostinato (0.1875s per 8th note)
    step = 0.1875
    ostinato_bars = [
        ['D4', 'D4', 'F4', 'D4', 'A4', 'D4', 'G4', 'F4'],
        ['D4', 'D4', 'F4', 'D4', 'Bb4', 'A4', 'G4', 'F4'],
        ['Bb3', 'Bb3', 'D4', 'Bb3', 'F4', 'Bb3', 'E4', 'D4'],
        ['A3', 'A3', 'C#4', 'E4', 'A4', 'G4', 'F4', 'E4'],
    ] * 4

    t_cur = 0.0
    for b_idx, bar in enumerate(ostinato_bars):
        if t_cur >= dur - 1.5:
            break
        # Driving sub-bass pulse on beat 1 and 3
        bass_note = 'D2' if b_idx % 4 in (0, 1) else ('Bb2' if b_idx % 4 == 2 else 'A2')
        for pulse in range(4):
            b_sig = synth_piano(NOTE_FREQS[bass_note], 0.35, amp=0.26)
            add_note(l, r, t_cur + pulse * (step * 2), b_sig, pan=0.0)
        # Staccato harpsichord/string ostinato
        for s_i, note in enumerate(bar):
            stac = synth_piano(NOTE_FREQS[note], 0.22, amp=0.16)
            add_note(l, r, t_cur + s_i * step, stac, pan=-0.3 if s_i % 2 == 0 else 0.3)
        t_cur += len(bar) * step

    # Dramatic lead violin over the battle ostinato
    lead = [
        (3.0, 'D5', 0.75), (3.75, 'F5', 0.75), (4.5, 'A5', 1.1), (5.625, 'G5', 0.375),
        (6.0, 'F5', 0.75), (6.75, 'E5', 0.75), (7.5, 'D5', 1.5),
        (9.0, 'Bb5', 0.75), (9.75, 'A5', 0.75), (10.5, 'G5', 1.1), (11.625, 'F5', 0.375),
        (12.0, 'E5', 1.5), (13.5, 'A5', 1.5),
        (15.0, 'D6', 1.1), (16.125, 'C6', 0.375), (16.5, 'Bb5', 0.75), (17.25, 'A5', 0.75),
        (18.0, 'G5', 0.75), (18.75, 'F5', 0.75), (19.5, 'E5', 1.5), (21.0, 'D5', 2.5)
    ]
    for t0, note, ldur in lead:
        vio = synth_solo_violin(NOTE_FREQS[note], ldur, amp=0.25)
        add_note(l, r, t0, vio, pan=0.1)

    l, r = apply_cathedral_reverb(l, r, decay=0.35, wet=0.28)
    save_stereo_wav(os.path.join(out_dir, 'bgm_04_dies_irae_blade.wav'), l, r)


def generate_bgm_05_lacuna_requiem(out_dir):
    """Track 05: Elegy of Vitrified Memories (Sorrowful Solo Violin & Piano in E minor)"""
    dur = 28.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    chords = [
        (['E2', 'B2', 'G3', 'B3'], 4.0),
        (['C3', 'G3', 'E4', 'G4'], 4.0),
        (['A2', 'E3', 'C4', 'E4'], 4.0),
        (['B2', 'F#3', 'D#4' if 'D#4' in NOTE_FREQS else 'Eb4', 'F#4'], 4.0),
        (['E2', 'B2', 'G3', 'B3'], 4.0),
        (['C3', 'G3', 'E4', 'G4'], 4.0),
        (['B2', 'F#3', 'B3', 'Eb4'], 4.0),
    ]
    for idx, (notes, cdur) in enumerate(chords):
        t0 = idx * 4.0
        for n_i, note in enumerate(notes):
            add_note(l, r, t0 + n_i * 0.25, synth_piano(NOTE_FREQS[note], cdur, amp=0.15), pan=-0.2 + n_i * 0.1)
            add_note(l, r, t0, synth_strings_pad(NOTE_FREQS[note], cdur + 0.5, amp=0.09), pan=(n_i - 1.5) * 0.2)

    elegy = [
        (0.5, 'B4', 1.5), (2.0, 'E5', 1.5), (3.5, 'F#5', 0.5),
        (4.0, 'G5', 2.0), (6.0, 'F#5', 1.0), (7.0, 'E5', 1.0),
        (8.0, 'C5', 2.0), (10.0, 'A4', 1.0), (11.0, 'C5', 1.0),
        (12.0, 'B4', 3.5),
        (16.0, 'E5', 1.5), (17.5, 'G5', 0.5), (18.0, 'B5', 1.5), (19.5, 'A5', 0.5),
        (20.0, 'G5', 2.0), (22.0, 'E5', 1.5), (23.5, 'F#5', 0.5),
        (24.0, 'E5', 3.5)
    ]
    for t0, note, edur in elegy:
        vio = synth_solo_violin(NOTE_FREQS[note], edur + 0.3, amp=0.24)
        add_note(l, r, t0, vio, pan=0.05)

    l, r = apply_cathedral_reverb(l, r, decay=0.50, wet=0.42)
    save_stereo_wav(os.path.join(out_dir, 'bgm_05_lacuna_requiem.wav'), l, r)


def generate_bgm_06_thirteenth_dawn(out_dir):
    """Track 06: The Thirteenth Bell of Dawn (Grand Finale / True Ending in F Major)"""
    dur = 30.0
    n = int(SR * dur)
    l = np.zeros(n)
    r = np.zeros(n)

    chords = [
        (['F2', 'C3', 'A3', 'C4', 'F4'], 4.0),
        (['C3', 'G3', 'C4', 'E4', 'G4'], 4.0),
        (['D3', 'A3', 'D4', 'F4', 'A4'], 4.0),
        (['Bb2', 'F3', 'Bb3', 'D4', 'F4'], 4.0),
        (['F2', 'C3', 'A3', 'C4', 'F4'], 4.0),
        (['C3', 'G3', 'C4', 'E4', 'G4'], 4.0),
        (['Bb2', 'F3', 'D4', 'F4', 'Bb4'], 3.0),
        (['F2', 'C3', 'A3', 'C4', 'F4'], 3.0),
    ]
    t_cur = 0.0
    for notes, cdur in chords:
        for n_i, note in enumerate(notes):
            add_note(l, r, t_cur, synth_strings_pad(NOTE_FREQS[note], cdur + 0.5, amp=0.12), pan=(n_i - 2) * 0.22)
        for step_i in range(8):
            anote = notes[step_i % len(notes)]
            add_note(l, r, t_cur + step_i * (cdur / 8.0), synth_piano(NOTE_FREQS[anote], 1.1, amp=0.14), pan=-0.25 + (step_i % 4) * 0.15)
        t_cur += cdur

    dawn_mel = [
        (0.0, 'C5', 1.0), (1.0, 'F5', 1.5), (2.5, 'G5', 0.5), (3.0, 'A5', 1.0),
        (4.0, 'G5', 2.0), (6.0, 'E5', 1.0), (7.0, 'C5', 1.0),
        (8.0, 'D5', 1.0), (9.0, 'F5', 1.5), (10.5, 'G5', 0.5), (11.0, 'A5', 1.0),
        (12.0, 'Bb5', 2.0), (14.0, 'A5', 1.0), (15.0, 'G5', 1.0),
        (16.0, 'A5', 1.5), (17.5, 'Bb5', 0.5), (18.0, 'C6', 2.0),
        (20.0, 'G5', 1.5), (21.5, 'A5', 0.5), (22.0, 'Bb5', 2.0),
        (24.0, 'A5', 1.5), (25.5, 'G5', 1.5), (27.0, 'F5', 2.8)
    ]
    for t0, note, mdur in dawn_mel:
        add_note(l, r, t0, synth_music_box(NOTE_FREQS[note], mdur + 0.5, amp=0.20), pan=0.2)
        add_note(l, r, t0, synth_solo_violin(NOTE_FREQS[note], mdur + 0.3, amp=0.18), pan=-0.15)

    l, r = apply_cathedral_reverb(l, r, decay=0.52, wet=0.42)
    save_stereo_wav(os.path.join(out_dir, 'bgm_06_thirteenth_dawn.wav'), l, r)


def generate_sfx(sfx_dir):
    np.random.seed(42)

    # 1. Clock Tick (double tick)
    dur = 1.0
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    sig = np.zeros_like(t)
    for t0, f in [(0.02, 3100.0), (0.52, 2400.0)]:
        idx = int(t0 * SR)
        seg_t = np.linspace(0, 0.04, int(0.04 * SR))
        click = (np.sin(2 * np.pi * f * seg_t) + 0.5 * np.sin(2 * np.pi * (f * 1.7) * seg_t)) * np.exp(-seg_t * 140.0)
        sig[idx:idx + len(click)] += click * 0.7
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_clock_tick.wav'), sig, sig)

    # 2. Cathedral Bell Toll
    dur = 4.5
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    f0 = 146.83  # D3
    partials = [(1.0, 0.5, 0.8), (2.0, 0.4, 1.1), (2.4, 0.3, 1.6), (3.0, 0.25, 2.2), (4.2, 0.18, 3.5), (5.4, 0.12, 5.0)]
    bell = np.zeros_like(t)
    for mult, amp, dec in partials:
        bell += np.sin(2 * np.pi * (f0 * mult) * t) * np.exp(-t * dec) * amp
    bell *= (1.0 - np.exp(-t * 200.0))
    l, r = apply_cathedral_reverb(bell, bell, decay=0.55, wet=0.45)
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_bell_toll.wav'), l, r)

    # 3. Glass Shatter
    dur = 1.8
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    shatter = np.random.randn(len(t)) * np.exp(-t * 12.0) * 0.4
    for shard_i in range(28):
        s_t0 = np.random.uniform(0.0, 0.65)
        s_f = np.random.uniform(2200.0, 7800.0)
        idx = int(s_t0 * SR)
        slen = min(len(t) - idx, int(0.18 * SR))
        st = np.linspace(0, slen / SR, slen)
        shatter[idx:idx + slen] += np.sin(2 * np.pi * s_f * st) * np.exp(-st * 28.0) * 0.25
    l, r = apply_cathedral_reverb(shatter, shatter, decay=0.4, wet=0.35)
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_glass_shatter.wav'), l, r)

    # 4. Sword Clash
    dur = 1.4
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    # Metallic ring + noise transient
    clash = np.random.randn(len(t)) * np.exp(-t * 35.0) * 0.6
    for mf in [1850, 2740, 3910, 5120, 6480]:
        clash += np.sin(2 * np.pi * mf * t) * np.exp(-t * 4.5) * 0.18
    l, r = apply_cathedral_reverb(clash, clash, decay=0.35, wet=0.3)
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_sword_clash.wav'), l, r)

    # 5. Worldline Shift / Laplace Eye Activation
    dur = 2.4
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    sweep_f = 180.0 + 920.0 * np.sin(np.pi * t / dur) ** 2
    phase = 2 * np.pi * np.cumsum(sweep_f) / SR
    warp_l = (np.sin(phase) * 0.5 + np.sin(phase * 1.5) * 0.3) * np.sin(np.pi * t / dur)
    warp_r = (np.sin(phase + 0.8) * 0.5 + np.sin(phase * 1.5 - 0.6) * 0.3) * np.sin(np.pi * t / dur)
    # Add high clockwork rewind ticks
    for tick_t in np.linspace(0.05, 1.8, 18):
        idx = int(tick_t * SR)
        slen = int(0.02 * SR)
        st = np.linspace(0, 0.02, slen)
        warp_l[idx:idx + slen] += np.sin(2 * np.pi * 3600 * st) * np.exp(-st * 150) * 0.3
        warp_r[idx:idx + slen] += np.sin(2 * np.pi * 4200 * st) * np.exp(-st * 150) * 0.3
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_worldline_shift.wav'), warp_l, warp_r)

    # 6. Heartbeat
    dur = 1.2
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    hb = np.zeros_like(t)
    for t0, amp in [(0.05, 0.85), (0.32, 0.60)]:
        idx = int(t0 * SR)
        slen = int(0.22 * SR)
        st = np.linspace(0, 0.22, slen)
        thump = np.sin(2 * np.pi * (68.0 * np.exp(-st * 4.0)) * st) * np.exp(-st * 16.0) * amp
        hb[idx:idx + slen] += thump
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_heartbeat.wav'), hb, hb)

    # 7. UI Hover & 8. UI Confirm & 9. Page Turn
    dur = 0.35
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    hover = synth_music_box(1174.66, dur, amp=0.45)
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_ui_hover.wav'), hover, hover)

    dur = 1.1
    confirm = synth_music_box(587.33, dur, amp=0.35) + synth_music_box(880.0, dur, amp=0.35) + synth_music_box(1174.66, dur, amp=0.3)
    l, r = apply_cathedral_reverb(confirm, confirm, decay=0.35, wet=0.3)
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_ui_confirm.wav'), l, r)

    dur = 0.35
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    noise = np.random.randn(len(t))
    # Smooth noise for paper rustle
    kernel = np.ones(12) / 12.0
    rustle = np.convolve(noise, kernel, mode='same') * np.sin(np.pi * t / dur) * np.exp(-t * 6.0) * 0.45
    save_stereo_wav(os.path.join(sfx_dir, 'sfx_page_turn.wav'), rustle, rustle)


if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    bgm_dir = os.path.join(base_dir, 'assets', 'bgm')
    sfx_dir = os.path.join(base_dir, 'assets', 'sfx')
    print("Synthesizing 6 BGM tracks...")
    generate_bgm_01_pale_star_aria(bgm_dir)
    generate_bgm_02_white_night_atelier(bgm_dir)
    generate_bgm_03_sunken_zeroth_spire(bgm_dir)
    generate_bgm_04_dies_irae_blade(bgm_dir)
    generate_bgm_05_lacuna_requiem(bgm_dir)
    generate_bgm_06_thirteenth_dawn(bgm_dir)
    print("Synthesizing SFX tracks...")
    generate_sfx(sfx_dir)
    print("All audio assets successfully generated!")
