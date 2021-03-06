import { Grid, Typography } from '@material-ui/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useFirestore, useFirestoreDocData } from 'reactfire'

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
  const ticket = store.collection('votes').doc(id)
  const ticketData = useFirestoreDocData(ticket)

  const totalVotes = Object.values(ticketData).reduce((votes, currentTotal) => {
    return currentTotal + votes
  })

  return (
    <div className="container">
      <Head>
        <title>Results for {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant="h4" gutterBottom>
          Results for {id}
        </Typography>
        {options.map(option => {
          if (!ticketData[option]) return null
          const votePercentage = `${Math.round(ticketData[option] / totalVotes * 100)}%`
          return (
            <div key={option} className={`option option-${option}`} style={{
              width: votePercentage
            }}>
              <Grid container justify="space-between" alignItems="center">
                <Typography variant="body1">{option}</Typography>
                <Typography variant="body1">
                  {votePercentage} ({ticketData[option]})
                </Typography>
              </Grid>
            </div>
          )
        })}
      </main>
      <style jsx>{`
        @keyframes moveOption {
          from {
            transform: scaleX(0.3);
          }

          to {
            transform: scaleX(1)
          }
        }

        .option {
          animation: moveOption 600ms;
          color: #fff;
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          padding: 16px;
          transform-origin: left center;
          transition: all 600ms;
        }

        .option-1 {
          background-color: #6a2c70;
        }

        .option-2 {
          background-color: #f08a5d;
        }

        .option-3 {
          background-color: #f9ed69;
        }

        .option-5 {
          background-color: #08d9d6;
        }

        .option-8 {
          background-color: #3490de;
        }

        .option-13 {
          background-color: #b83b5e;
        }
      `}</style>
    </div>
  )
}
