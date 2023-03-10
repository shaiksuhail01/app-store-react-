import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeClassStyle = isActive ? 'activeTabButton' : ' '
  const onClickTab = () => {
    clickTabItem(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tabItemContainer ${activeClassStyle}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
