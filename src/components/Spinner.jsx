import PropType from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  margin: "100px auto",
  height: '300px',
  width: '300px'
};


const Spinner = ({ loading }) => {
  return (
    <ClipLoader color='#172554'
      loading={loading}
      cssOverride={override}
    />
  )
};

Spinner.propTypes = {
  loading: PropType.bool
};

export default Spinner