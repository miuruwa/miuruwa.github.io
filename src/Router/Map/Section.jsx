import Link from "./Link"

export default function (item) {
    return <p>
        {item.title} <Link>
            {item.link}
        </Link>
    </p>
}