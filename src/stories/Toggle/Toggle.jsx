import PropTypes from 'prop-types';

import './toggle.css';

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ isChecked, onChange }) => {
  return (
    <div className="toggle-container">
      <input 
        className="hidden" 
        type="checkbox" 
        id="toggle_1" value="1"
        checked={isChecked}
        onChange={onChange}
      />
      <label className="toggle-label rounded-full" htmlFor="toggle_1">
        <span className="toggle-span rounded-full"></span>
      </label>

      <span className="w-8"></span>

      <input 
        className="hidden" 
        type="checkbox" 
        id="toggle_2" 
        value="2"
        checked={isChecked}
        onChange={onChange}
      />
      <label className="toggle-label" htmlFor="toggle_2">
        <span className="toggle-span"></span>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  /**
   * Is checkbox checked ?
   */
  isChecked: PropTypes.bool,
  /**
   * Handle when checkbox is changed
   */
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  isChecked: false,
  onChange: () => {}
};