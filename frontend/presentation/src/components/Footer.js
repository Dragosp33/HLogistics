import githubLogo from './github-mark.png';
import icon from './favicon-32x32.png';
import linkedin from './LI-In-Bug.png';

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
      <div className='col-md-4 d-flex align-items-center'>
        <a
          href='/'
          className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'
        >
          <img
            alt=''
            src={icon}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
        </a>
        <span className='mb-3 mb-md-0 text-body-secondary'>
          © 2023 Company, Inc
        </span>
      </div>

      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'>
          <a
            className='text-body-secondary'
            href='https://github.com/Dragosp33'
          >
            <img
              className='bi'
              width='24'
              height='24'
              alt='github'
              src={githubLogo}
            />
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-body-secondary'
            href='https://www.linkedin.com/in/dragos-polifronie-b7b725200/'
            target='blank'
          >
            <img
              className='bi'
              width='24'
              height='24'
              alt='github'
              src={linkedin}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
