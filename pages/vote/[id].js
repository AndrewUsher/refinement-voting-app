import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
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
    router.push(`/results/${id}`)
  }
  return (
    <div className="container">
      <Head>
        <title>Vote for {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography variant="h4" gutterBottom>
          What is the size for {id}?
        </Typography>
        <ButtonGroup variant="contained" color="primary" size="large">
          {options.map(option => (
            <Button key={option} onClick={handleVote(option)}>
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </div>
  )
}
