import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.styles.scss";

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      remember: data.get("checkbox"),
    });
   
  };

  return (
    <div className="loginContainer">
      <div className="loginContainer__LeftSide">
        <ThemeProvider theme={theme}>
          <Container className="loginContainer__box" component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                padding: "40px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" sx={{ fontSize: "18px" }}>
                Авторизация
              </Typography>{" "}
              <Box
                component="form"
                onSubmit={handleSubmit}
                Validate
                sx={{
                  mt: 1,
                }}
              >
                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                <Grid container>
                  <Grid items xs>
                    <Link href="#" variant="body2">
                      Забыли пароль?
                    </Link>{" "}
                  </Grid>{" "}
                  <FormControlLabel control={<Checkbox defaultChecked name="checkbox" value="remember" color="primary" />} label="Оставаться в системе" />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  deprecated="true"
                  
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#03a9f4",
                  }}
                >
                  {" "}
                  Авторизоваться{" "}
                </Button>{" "}
              </Box>{" "}
            </Box>{" "}
          </Container>{" "}
        </ThemeProvider>{" "}
        <Grid className="loginContainer__SignUp" item>
          {"Нет учетной записи? "}
          <Link sx={{ textDecoration: "none", color: "#03a9f4" }} href="/signup" variant="body2">
            {"Подписаться"}{" "}
          </Link>{" "}
        </Grid>{" "}
      </div>
      <div className="loginContainer__RigthSide"> fsdfsdfsdf </div>{" "}
    </div>
  );
}
