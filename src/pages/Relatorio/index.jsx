import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Menu from "../../components/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#51443C",
    color: theme.palette.common.white,
    textAlign: "left",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    textAlign: "left",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Thales Hipólito", "Bancários", "01/02/23", "ABERTO"),
  createData("Clarissa frazão", "Bessa", "01/02/23", "FECHADO"),
  createData("Leile Hipólito", "Jardim oceania", "01/02/23", "ABERTO"),
  createData("Mateus frazao", "Intermares", "01/02/23", "FECHADO"),
  createData("Laura frazao", "Altiplano", "01/02/23", "FECHADO"),
];

export default function Relaatorio() {
  return (
    <>
      <div className="cont" style={{ display: "flex" }}>
        <Menu />
        <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
          <h1 style={{ color: "#51443C", fontSize: "2.25rem" }}>Relartorio</h1>
          <form>
            <Grid container spacing={2} mt={3} rowSpacing={4}>
              <Grid item xs={3}>
                <TextField
                  name="Início"
                  label="Início"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="Fim"
                  label="Fim"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ height: "100%", fontWeight: "700" }}
                >
                  Cadastrar pedido
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ padding: "3rem 0" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell sx={{ fontWeight: "bold" }}>
                      Nome do cliente
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                      Bairro
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                      Data do pedido
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                      Status
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </div>
    </>
  );
}
