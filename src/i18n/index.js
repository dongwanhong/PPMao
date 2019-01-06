import React, { Component } from 'react';
/* react-intl imports */
import { addLocaleData, IntlProvider } from 'react-intl';
import englishLocaleData from 'react-intl/locale-data/en';
import chineseLocaleData from 'react-intl/locale-data/zh';
import { connect } from 'react-redux';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

addLocaleData([...englishLocaleData, ...chineseLocaleData]);
const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

class LocaleProvider extends Component {
  constructor(props) {
    super(props);

    const { language } = navigator;
    const { lang } = props;
    this.state = {
      lang: lang || language,
    };
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      lang: nextProp.lang,
    });
  }

  render() {
    const { lang } = this.state;
    const { children } = this.props;
    return (
      <IntlProvider className locale={lang} messages={messages[lang]}>
        {children}
      </IntlProvider>);
  }
}

const mapStateToProps = state => ({
  lang: state.getIn(['config', 'local', 'lang']),
});

export default connect(mapStateToProps, null)(LocaleProvider);
