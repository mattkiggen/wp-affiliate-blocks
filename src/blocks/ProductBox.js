export default function ProductBox(props) {
  const listIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5'
      viewBox='0 0 20 20'
      fill='currentColor'
      width={10}>
      <path
        fillRule='evenodd'
        d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <div className='wab-product-box'>
      <img src='https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg' />
      <div className='wab-product-box-content'>
        <h3>2021 Apple MacBook Pro 16-inch</h3>
        <ul>
          <li>{listIcon} CPU: 2.6GHz Intel Core i7 (9th Gen)</li>
          <li>{listIcon} RAM: 16GB</li>
          <li>{listIcon} Storage: 512GB SSD</li>
          <li>{listIcon} GPU: 4GB AMD Radeon Pro 5300M</li>
        </ul>
        <a href='https://amazon.com' rel='nofollow' target='_blank'>
          View on Amazon
        </a>
      </div>
    </div>
  );
}
