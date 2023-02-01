import Menu from "../../components/Menu";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";

import { Box, Button, Container, Grid, TextField } from "@mui/material";

import { getCep } from "../../services/api";
import { useState } from "react";

export default function App() {
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGetCep = (cep) => {
    getCep({ cep: cep }).then((result) => {
      setRua(result.address_name);
      setBairro(result.district);
      setLatitude(result.lat);
      setlongitude(result.lng);
    });
  };

  return (
    <>
      <div className="app">
        <div style={{ display: "flex" }}>
          <Menu />
          <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
            <Card>
              <Box sx={{ padding: "2rem 1rem" }}>
                <h1 style={{ color: "#51443C", fontSize: "2.25rem" }}>
                  Cadastrar pedido
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2} mt={3} rowSpacing={4}>
                    <Grid item xs={3}>
                      <TextField
                        {...register("cep", { required: true })}
                        id="cep"
                        label="Cep"
                        fullWidth
                        onBlur={(event) => handleGetCep(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="bairro"
                        fullWidth
                        label="Bairro"
                        value={bairro}
                        {...register("bairro")}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        id="rua"
                        label="Rua"
                        fullWidth
                        value={rua}
                        {...register("rua")}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <TextField
                        id="numero"
                        label="Numero"
                        fullWidth
                        {...register("numero", { required: true })}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="nome"
                        label="Nome do cliente"
                        fullWidth
                        {...register("nome", { required: true })}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="telefone"
                        label="Telefone do cliente"
                        fullWidth
                        {...register("telefone", { required: true })}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="observacao"
                        label="Observação do pedido"
                        fullWidth
                        {...register("observacao", { required: true })}
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
              </Box>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}
