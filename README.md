# next-blog-tuto
Esse projeto é dedicado ao estudo do Next.JS alem de compartilhar minhas anotações.

Meu primeiro insight é sobre o Link,que de acordo com a propria documentação do Next.js, serve para renderizar as paginas pelo 
browser do cliente, sem ter que fazer uma requisição para o servidor web. Sendo assim, caso necessite acessar uma pagina externa ao sistema 
desenvolvido com o Next a ancora <a> deverá ser utilizada.

Arquivos de imagem que estiverem na pasta 'public' poderão ser utilizadas apenas referenciando-as por '/nomeimagem'

Os arquivos de CSS deverão ser nomeados como .module.css para que o FrameWork consiga utilliza-los pois ao carregá-los o NEXT os renomeia automaticamente.

getStaticProps
A função getStaticProps é processada apenas no lado do servidor, nao aparecendo no lado do cliente. E será executada na build do projeto.
Isso faz muita diferença. Como a documentação 
do Next explica:

"Development vs. Production
In development (npm run dev or yarn dev), getStaticProps runs on every request.
In production, getStaticProps runs at build time.

This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers." 
(link: https://nextjs.org/learn/basics/data-fetching/getstaticprops-details, data: 29-04-2021)

GetServerSideProps:
"You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request" 

SWR -> https://swr.vercel.app
React Hooks library for data fetching
Utilizando o Axios no SWR:
"
1)
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

2)
import useSWR from 'swr'

function useUser (id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

And use it in your components:

3)
function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <img src={user.avatar} />
}
"
<br>
<b>Obervações Fallback</b>
Fallback
Recall that we returned fallback: false from getStaticPaths. What does this mean?

If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.

If fallback is true, then the behavior of getStaticProps changes:

The paths returned from getStaticPaths will be rendered to HTML at build time.
The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.

This is beyond the scope of our lessons, but you can learn more about fallback: true and fallback: 'blocking' in the fallback documentation.
