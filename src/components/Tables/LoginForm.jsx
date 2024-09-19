import { Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

export const loginScheme = object({
  email: string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Email zorunludur"),
  password: string()
    .required("Şifre zorunludur")
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector(state => state.auth); // store'da yaptığımız fetchStart işlemini kullanmış olduk.
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email *"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="Password *"
          name="password"
          id="password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {!loading ? (
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}
      </Box>
    </Form>
  );
};

export default LoginForm;
