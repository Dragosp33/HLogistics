const ServicesInternational = () => {
  return (
    <>
      <div
        className='container-fluid'
        style={{ height: '100px', backgroundColor: 'rgb(248, 248, 248)' }}
      >
        <div className='container-lg services-header'>
          <h3> International </h3>
          <nav className='breadCrumbNav' aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='/services'>Services</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                International
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ServicesInternational;
