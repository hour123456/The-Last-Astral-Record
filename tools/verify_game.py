# -*- coding: utf-8 -*-
import os
import re
import glob

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
imgs = glob.glob(os.path.join(base, "assets", "images", "*.png"))
bgms = glob.glob(os.path.join(base, "assets", "bgm", "*.wav"))
sfxs = glob.glob(os.path.join(base, "assets", "sfx", "*.wav"))
print(f"Images: {len(imgs)} files")
print(f"BGMs:   {len(bgms)} files")
print(f"SFXs:   {len(sfxs)} files")

js_files = ["story_act1.js", "story_interlude.js", "story_act2.js", "story_flashback.js", "story_act3.js"]
ids = set()
nexts = []
total_chars = 0
for jf in js_files:
    c = open(os.path.join(base, "js", jf), encoding="utf-8").read()
    total_chars += len(c)
    ids.update(re.findall(r'id:\s*"([^"]+)"', c))
    nexts.extend([(jf, n) for n in re.findall(r'next:\s*"([^"]+)"', c)])

missing = [(jf, n) for jf, n in nexts if n not in ids]
print(f"Total Story Scene Nodes: {len(ids)}")
print(f"Total Script Volume: {total_chars:,} characters")
print(f"Total Branch/Jump Pointers: {len(nexts)}")
print(f"Missing Target IDs: {missing}")

assert len(imgs) == 14, f"Expected 14 images, got {len(imgs)}"
assert len(bgms) == 6, f"Expected 6 BGMs, got {len(bgms)}"
assert len(sfxs) == 9, f"Expected 9 SFXs, got {len(sfxs)}"
assert len(missing) == 0, f"Missing targets: {missing}"
print("ALL INTEGRITY CHECKS PASSED 100%!")
