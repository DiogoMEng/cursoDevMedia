export default function checkExistingValues(championship) {
    if (championship.length <= 0) {
        return { status: 404, res: "Nenhum campeonato encontrado" }
    } else return { status: 200, res: championship };
}