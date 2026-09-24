# For Chelsy ♡

A personal romantic website designed as a digital love letter.

## Design Direction

Primary:
**Romantic Editorial + Digital Love Letter**

Supporting:
- film photography
- scrapbook
- paper
- elegant typography
- cinematic motion
- subtle neumorphism

Neumorphism is intentionally NOT the dominant visual language. It is used selectively for tactile controls.

## Experience

Hero → introduction → memories → little things → photos → music → love letter → final message

## Personal Content

See `CONTENT.md`.

Personal memories must never be fabricated.

## Mengisi konten

Semua teks ada di `index.html` (nilai dari `CONTENT.md`). Placeholder `[...]` sengaja
dibiarkan apa adanya supaya tidak ada fakta yang dikarang — ganti satu per satu.

Taruh file dengan nama persis ini:

```
images/hero.jpg
images/memory-01.jpg
images/memory-02.jpg
images/memory-03.jpg
images/memory-04.jpg
images/gallery-01.jpg … images/gallery-04.jpg
music/song.mp3
```

Foto belum ada? Biarkan saja — tiap slot foto otomatis berubah jadi placeholder
("foto menyusul ♡"), bukan ikon gambar rusak. Audio belum ada juga aman: tombol
play nonaktif sendiri dan tidak pernah autoplay.

## Struktur

```
index.html        seluruh narasi (satu halaman)
css/style.css     design token + layout + komponen + motion
js/main.js        reveal, surat, music player
```

Tanpa framework, tanpa build step, tanpa dependency.

## Menjalankan

```
python -m http.server 8000
```

Buka http://localhost:8000

## Development

Use the existing framework and package manager. Avoid unnecessary dependencies.

## Goal

The final website should feel personal, warm, elegant, intimate, nostalgic, and unmistakably made for Chelsy.
