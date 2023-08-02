import Layout from '../../Components/Layout'
function NotFound() {
  return (
    <Layout >
      <p className='flex items-center justify-center font-bold text-2xl col-span-4  '>
        ¡SITE UNDER CONSTRUCTION!
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M3 6 H21 A1 1 0 0 1 22 7 V13 A1 1 0 0 1 21 14 H3 A1 1 0 0 1 2 13 V7 A1 1 0 0 1 3 6 z" />
          <path d="M17 14v7M7 14v7M17 3v3M7 3v3M10 14L2.3 6.3M14 6l7.7 7.7M8 6l8 8" />
        </svg>
      </p>
    </Layout>
  )
}
export default NotFound

