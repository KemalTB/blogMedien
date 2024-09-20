import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
// import AuthImage from "../components/AuthImage";
import { Formik} from "formik";
import useAuthCall from "../hooks/useAuthCAll";
import RegisterForm, { SignupSchema } from "../components/Tables/RegisterForm";

const Register = () => {
  const {register} = useAuthCall()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <div style={{ backgroundColor: 'green', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '50%' }}>
    <LockIcon style={{ color: 'white', fontSize: 35 }} />
  </div>
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Sign Up
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
              image: "",
              city: "",
              bio: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();// formu temizleme yapar.
              actions.setSubmitting(false);// isSubmitting değerini tekrar false a çeker
            }}
            component={(props) => <RegisterForm {...props} />} //* formikin bize verdiğim metotlar,değişkenler props içersinde geliyor biz de onları RegisterForm componentine göndermiş olduk.
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
          Already have an account?
          <Link to="/login" className="text-red-500">
    Sign in
  </Link>
          </Box>
        </Grid>

        {/* <AuthImage image={image} /> */}
      </Grid>
    </Container>
  );
};

export default Register;