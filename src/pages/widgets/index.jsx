import React from "react";
import './widget.css'
import { Container } from "react-bootstrap";
import InfoBox from "../../components/widget/info-box/index";
import InfoWithShadow from "../../components/widget/info-box-with-shadow";
import InfoBoxWithBg from "../../components/widget/info-box-with-bg";
import InfoBoxWithBgGradiant from "../../components/widget/info-box-with-bg-gradient";
import SmallBox from "../../components/widget/small-box";
import Abilities from "../../components/widget/cards/abilities";
import CustomeShadowsVariations from "../../components/widget/cards/custom-shadows-variations";
import ColorsVariationsCrads from "../../components/widget/cards/colors-variations";
import DirectChatSimple from "../../components/widget/direct-chat/direct-chat-simple";
import ChatCustomShadowsVariations from "../../components/widget/direct-chat/chat-custom-shadows-variations";
import SocialWidgetcard from "../../components/widget/social-widgets/nadia-carmichael-card1";
import SWShadowVaraition from "../../components/widget/social-widgets/sw-custom-shadows-variations";
import CardWithImage from "../../components/widget/social-widgets/card-with-image";
import CardWithImageOverlay from "../../components/widget/social-widgets/card-with-image-overlay";
import BreadCrumb from "../../components/breadcrumb";
export default function Widgets() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Widgets" item1="Home" item2="Widgets" />
      </section>
      <section className="content">
        <Container fluid>
          <InfoBox />
          <InfoWithShadow />
          <InfoBoxWithBg />
          <InfoBoxWithBgGradiant />
          <SmallBox />
          <Abilities />
          <CustomeShadowsVariations />
          <ColorsVariationsCrads />
          <DirectChatSimple />
          <ChatCustomShadowsVariations />
          <SocialWidgetcard />
          <CardWithImage />
          <SWShadowVaraition />
          <CardWithImageOverlay />
        </Container>
      </section>
    </div>
  );
}
