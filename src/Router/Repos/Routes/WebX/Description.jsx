import { CardBlock } from "@webx/forms"

export default function () {
    return <>
        <CardBlock className="repos-page options">
            <p>
                WebX - готовый шаблон приложения, написанный на React для упрощения работы.
            </p>
        </CardBlock>
        <h6>
            У WebX есть 2 реализации
        </h6>
        <h3>
            {"~>"} Vite <br />
            {"~>"} Create-React-App
        </h3>
        <h6>
            На WebX работают
        </h6>
        <h3>
            {"~>"} Cartify <br />
            {"~>"} Notes <br />
            {"~>"} miuruwa.github.io
        </h3>
    </>
}
