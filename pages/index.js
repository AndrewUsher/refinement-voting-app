import { Container, Paper, Typography } from '@material-ui/core'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Refinement Voting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Paper>
          <Typography variant="h4" gutterBottom>
            Refinement Voting App
          </Typography>
          <Typography variant="body1" gutterBottom>
        Creating a poll is as simple as a URL!
          </Typography>
          <Typography variant="h5">
          How does it work?
          </Typography>
          <Typography variant="body1">
            <ol>
              <li>Go to https://refinement-voting.vercel.app/vote/{'{TICKET_NUMBER}'}</li>
              <li>Select a number</li>
              <li>The results should show on your screen! &#127881;</li>
            </ol>
          </Typography>
          <Typography variant="h5">
            What if I want to view results later?
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>Go to https://refinement-voting.vercel.app/results/{'{TICKET_NUMBER}'}</li>
            </ul>
          </Typography>
          <Typography variant="h5">
            What&apos;s going on behind the scenes?
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>Check out <a href="https://github.com/AndrewUsher/refinement-voting-app">the github repo!</a></li>
            </ul>
          </Typography>
        </Paper>
      </Container>

    </>
  )
}
