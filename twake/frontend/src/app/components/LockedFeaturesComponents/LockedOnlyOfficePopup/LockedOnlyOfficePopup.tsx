import React from 'react';
import ObjectModal from 'app/components/ObjectModal/ObjectModal';
import { Button, Row, Typography } from 'antd';
import ModalManager from 'app/components/Modal/ModalManager';
import Languages from 'services/languages/languages';
import InitService from 'app/services/InitService';

type PropsType = {
  pricingPlanUrl: string;
};

const { Title, Text } = Typography;
export default () => (
  <ObjectModal
    titleCenter
    titleLevel={2}
    title={Languages.t('components.locked_features.locked_only_office_popup.title')}
    colTitleStyle={{ height: 64 }}
    titleTypographyStyle={{ height: 64, textAlign: 'center' }}
    style={{ height: 480 }}
    contentStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    footer={
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: 8 }}
          onClick={() =>
            window.open(
              InitService.server_infos?.configuration?.accounts?.console
                ?.company_subscription_url || '',
              'blank',
            )
          }
        >
          {Languages.t('components.locked_features.locked_guests_popup.learn_more_button')}
        </Button>
        <Text style={{ margin: '16px 0 ' }} strong>
          {Languages.t('components.locked_features.locked_guests_popup.or')}
        </Text>
        <Button
          type="ghost"
          style={{ height: 36, width: 163 }}
          onClick={() => ModalManager.closeAll()}
        >
          {Languages.t('components.locked_features.locked_guests_popup.skip_for_now_button')}
        </Button>
      </div>
    }
    hideFooterDivider
    footerAlign="center"
    footerStyle={{ marginBottom: 16 }}
  >
    <Row justify="center" align="middle" className="bottom-margin">
      <Title
        level={3}
        children={Languages.t('components.locked_features.locked_only_office_popup.subtitle')}
        style={{
          textAlign: 'center',
          margin: 0,
          height: 54,
        }}
      />
    </Row>

    <Row justify="center">
      <Text
        style={{
          textAlign: 'center',
          width: '404px',
        }}
        children={Languages.t('components.locked_features.locked_only_office_popup.text')}
      />
    </Row>
  </ObjectModal>
);
