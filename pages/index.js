import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <p>Hoş geldiniz!</p>
      <Link href="/altSayfa">
        <a>Git: Alt Sayfa</a>
      </Link>
    </div>
  );
}
