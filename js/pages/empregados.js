import { createModule } from "../engine/module.js";
import { SCHEMA_EMPREGADOS } from "../schemas/empregados.js";

export function iniciar() {
    return iniciarEmpregados();
}

export async function iniciarEmpregados() {
    const modulo = createModule({
        entity: "empregados",
        schema: SCHEMA_EMPREGADOS,
        container: "#app",
        stateName: "empregados",
        options: {
            titulo: "Cadastro de Empregados",
            tabela: "Empregados Cadastrados",
            permitirNovo: true,
            permitirEditar: true,
            permitirExcluir: true,
            pageSize: 10
        }
    });
    window.empregados = modulo;

    await modulo.iniciar();

    return modulo;
}

