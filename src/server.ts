import { app } from "./app";

const PORT: number = 8080;

app.listen(PORT, () => {
    console.info("Server successfully started on port %s", PORT);
})