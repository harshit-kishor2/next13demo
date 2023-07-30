import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // /api?id=1
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  console.log('Here you can get search params variable', id)
  return NextResponse.json({ message: 'Server is running ' + (id ? id : '') })
}

// export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
