import './index.scss';
const { registerBlockType } = wp.blocks;
import ProductBox from './blocks/ProductBox';

registerBlockType('wpaffiliateblocks/product-box', {
  title: 'Product Box',
  icon: 'welcome-learn-more',
  category: 'common',
  attributes: {
    productTitle: { type: 'string' },
    productBuyText: { type: 'string' },
  },
  edit: ProductBox,
  save: () => null,
});
