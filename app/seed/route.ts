// app/seed/route.ts

import { NextRequest, NextResponse } from 'next/server';

// Fonksiyonu tanımlayın
export async function GET(req: NextRequest) {
  const data = {
    message: 'Seed route is working!',
  };

  return NextResponse.json(data);
}

// Veya bir default export yapın (eğer tek bir fonksiyon ya da handler varsa)
export default async function handler(req: NextRequest) {
  const data = {
    message: 'Seed route is working!',
  };

  return NextResponse.json(data);
}
