import { TextControl } from '@wordpress/components';

export default function ProductBoxInput({ attributes, setAttributes }) {
  return (
    <div className='wab-product-box-input'>
      <TextControl
        label='Product Image URL'
        value={attributes.image}
        onChange={(value) => setAttributes({ image: value })}
      />
      <TextControl
        label='Product Title'
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <TextControl
        label='Button Text'
        value={attributes.buyText}
        onChange={(value) => setAttributes({ buyText: value })}
      />
      <TextControl
        label='Link'
        value={attributes.link}
        onChange={(value) => setAttributes({ link: value })}
      />
    </div>
  );
}
