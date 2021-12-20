import { useState } from '@wordpress/element';
import { ToggleControl } from '@wordpress/components';

import ProductBoxInput from '../components/ProductBoxInput';
import ProductBoxPreview from '../components/ProductBoxPreview';

export default function ProductBox(props) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {showPreview ? (
        <ProductBoxPreview
          attributes={props.attributes}
          setAttributes={props.setAttributes}
        />
      ) : (
        <ProductBoxInput
          attributes={props.attributes}
          setAttributes={props.setAttributes}
        />
      )}
      <ToggleControl
        checked={showPreview}
        label='Show preview'
        onChange={() => setShowPreview(!showPreview)}
      />
    </>
  );
}
