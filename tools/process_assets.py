# -*- coding: utf-8 -*-
"""
AAA Visual Novel Asset Processor v3
Strict pure-black (#000000, max_c <= 7) exterior border flood-fill so dark hair/capes
(like Isolde's obsidian hair and black inquisitor cape) remain 100% intact and opaque!
"""

import os
from collections import deque
import numpy as np
from PIL import Image, ImageFilter

ARTIFACT_DIR = r"C:\Users\user\.gemini\antigravity\brain\1978f864-c443-4fde-8414-5a7bbebd6de9"
OUT_DIR = r"d:\AAA 게임\assets\images"

CHAR_MAP = {
    "char_celestia_normal_1791980177220.jpg": "char_celestia_normal.png",
    "char_celestia_battle_1791980202353.jpg": "char_celestia_battle.png",
    "char_isolde_normal_1791980220801.jpg": "char_isolde_normal.png",
    "char_isolde_emotional_1791980240425.jpg": "char_isolde_emotional.png",
    "char_nox_normal_1791980260773.jpg": "char_nox_normal.png",
    "char_justinia_normal_1791980285207.jpg": "char_justinia_normal.png",
}


def extract_character_rgba_v3(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    h, w, _ = arr.shape

    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    max_c = np.maximum(np.maximum(r, g), b)

    # Pure black background in JPEG has max_c <= 7
    bg_cand = (max_c <= 7)
    visited = np.zeros((h, w), dtype=bool)
    q = deque()

    for x in range(w):
        if bg_cand[0, x]:
            visited[0, x] = True
            q.append((0, x))
    for y in range(h):
        if bg_cand[y, 0] and not visited[y, 0]:
            visited[y, 0] = True
            q.append((y, 0))
        if bg_cand[y, w - 1] and not visited[y, w - 1]:
            visited[y, w - 1] = True
            q.append((y, w - 1))

    while q:
        cy, cx = q.popleft()
        for ny, nx in ((cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)):
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and bg_cand[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    fg_binary = (~visited).astype(np.uint8) * 255
    fg_img = Image.fromarray(fg_binary, mode="L")
    fg_smooth = fg_img.filter(ImageFilter.GaussianBlur(radius=1.2))
    alpha = np.array(fg_smooth, dtype=np.float32)

    arr[:, :, 3] = np.clip(alpha, 0, 255)
    out_img = Image.fromarray(arr.astype(np.uint8), mode="RGBA")
    out_img.save(dst_path, format="PNG", optimize=True)
    print(f"Clean RGBA sprite v3: {os.path.basename(dst_path)}")


if __name__ == "__main__":
    for src_name, dst_name in CHAR_MAP.items():
        extract_character_rgba_v3(
            os.path.join(ARTIFACT_DIR, src_name),
            os.path.join(OUT_DIR, dst_name)
        )
    print("All 6 character sprites cleanly extracted with v3!")
