import './index.scss';
const { registerBlockType } = wp.blocks;
import ProductBox from './blocks/ProductBox';

registerBlockType('wpaffiliateblocks/product-box', {
  title: 'Product Box',
  icon: 'welcome-learn-more',
  category: 'common',
  attributes: {
    title: { type: 'string' },
    image: { type: 'string' },
    features: { type: 'array' },
    buyText: { type: 'string' },
    link: { type: 'string' },
  },
  edit: ProductBox,
  save: () => null,
});
