export const prerender = false

const protonUrl = 'https://mail-api.proton.me/pks/lookup?op=get&search=hi@slava.fyi'

export async function GET() {
  let upstream

  try {
    upstream = await fetch(protonUrl, {
      headers: {
        accept: 'application/pgp-keys',
      },
    })
  }
  catch {
    return new Response('Public key unavailable', { status: 502 })
  }

  if (!upstream.ok || !upstream.body) {
    return new Response('Public key unavailable', { status: 502 })
  }

  return new Response(upstream.body, {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Disposition': 'attachment; filename="pubkey.asc"',
      'Content-Type': 'application/pgp-keys',
      'X-Content-Type-Options': 'nosniff',
    },
    status: 200,
  })
}
