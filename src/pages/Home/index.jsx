import { useToolKit } from "@shared/toolkit"

import HomepageBanner from "@blocks/HomepageBanner"
import languagesData from "@shared/languages"
import Meta from "@layout/Meta"

const Home = () => {
    const toolkit = useToolKit();

    const pageData = languagesData[toolkit.settings.language].homepage

    return <Meta title={pageData.title}>
        <HomepageBanner />
    </Meta>
}

export default Home;