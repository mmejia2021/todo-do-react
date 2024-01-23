export const getEnvVariables = () => {

    /* const url = import.meta.env
        ? `http://localhost:8080/api`
        : import.meta.env.VITE_API_URL; */

     return {
         VITE_API_URL: 'http://localhost:8080/api' 
     }
}