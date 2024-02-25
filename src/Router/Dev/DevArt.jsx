import DevArt from "/DevArt.png"
import DevArtEmpty from "/DevArtEmpty.png"
import OfflineExploit from "~/utils/OfflineExploit"

export default function () {
    const props = {
        // src: OfflineExploit() === 1 ? DevArtEmpty : DevArt
        src: DevArt
    }
    return <img {...props} />
}
