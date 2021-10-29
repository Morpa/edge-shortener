import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

export const Main = () => {
  const [value, setValue] = useState('')
  const [shortUrl, setShortUrl] = useState<string>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: value })
    })
    const data = await response.json()

    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${data.short}`
    )
  }

  return (
    <S.Wrapper>
      <S.Title>URLShortener</S.Title>
      <S.Description>A simple url shortener</S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Uma pessoa de pé ao lado de uma quadro branco com uma imagem de link."
      />

      <S.ShorterWrapper>
        {shortUrl ? (
          <S.FormLink>
            <Link href={shortUrl} passHref>
              <a target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
            </Link>
          </S.FormLink>
        ) : (
          <S.Form onSubmit={handleSubmit}>
            <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
            <S.Button type="submit">Shorten!</S.Button>
          </S.Form>
        )}
      </S.ShorterWrapper>
    </S.Wrapper>
  )
}
