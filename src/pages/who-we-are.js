import React from 'react'
import 'scss/present/_present.scss'
import Layout from 'components/layouts/layout';
import SectionTitle from 'components/layouts/section-title';
import Presentation from 'components/presentation/presentation';

const WhoWeArePage = () => {
  return (
    <Layout>
      <div className="presents">
        <SectionTitle title="Qui somme-nous ?" bgImage="image/common/1.jpg" bgColor="bg_prwkle" />
        <Presentation />
      </div>
    </Layout>
  )
}

export default WhoWeArePage
