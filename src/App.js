import "./styles.css";

import { Container, Paper, Button, Typography } from "@mui/material";

import BasicTable from "./BasicTable";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Button variant="contained" size="large" color="warning">
          Test Button
        </Button>
        <Paper elevation={3} sx={{ marginTop: 3, marginBottom: 3 }}>
          <Typography variant="h3" component="h2">
            This is a test of github
          </Typography>
        </Paper>
        <BasicTable />
      </Container>
    </div>
  );
}
