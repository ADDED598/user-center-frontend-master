import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'ADDED 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined/> ADDED GitHub</>,
          href: 'https://github.com/added598',
          blankTarget: true,
        },
        {
          key: 'blog',
          title: 'ADDED的博客',
          href: 'https://added.icu',
          blankTarget: true,
        }

      ]}
    />
  );
};

export default Footer;
