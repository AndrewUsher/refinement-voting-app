import Head from 'next/head'
import { useRouter } from 'next/router'
import firebase from 'firebase'
import { useFirestore } from 'reactfire'

const options = [1, 2, 3, 5, 8, 13]

export async function getServerSideProps (context) {
  return {
    props: {} // will be passed to the page component as props
  }
}

export default function Home () {
  const router = useRouter()
  const { id } = router.query
  const store = useFirestore()

  const handleVote = option => () => {
    store.collection('votes').doc(id).set({
      [option]: firebase.firestore.FieldValue.increment(1)
    }, {
      merge: true
    }
    )
    // router.push(`/results/${id}`)
  }
  return (
    <div className="container">
      <Head>
        <title>Vote for {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>What is the size for {id}?</h1>
        <div className="button-container">
          {options.map(option => (
            <button key={option} onClick={handleVote(option)}>{option}</button>
          ))}
        </div>
      </main>
    </div>
  )
}
