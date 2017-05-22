import glamorous from 'glamorous'
import * as polished from 'polished'

const AppButton = glamorous.button({
  display: 'inline-block',
  fontWeight: '400',
  lineHeight: '1.25',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  border: '1px solid transparent',
  padding: '.5rem 1rem',
  fontSize: '1rem',
  borderRadius: '.25rem',
  transition: 'all .2s ease-in-out',
})

const primaryColor = '#0275d8'

const activeStyles = {
  backgroundColor: polished.darken(0.2, primaryColor),
  borderColor: polished.darken(0.3, primaryColor),
  ':hover': {
    backgroundColor: polished.darken(0.25, primaryColor),
    borderColor: polished.darken(0.35, primaryColor),
  },
}

const PrimaryButton = glamorous(AppButton)(
  {
    color: '#fff',
    backgroundColor: primaryColor,
    borderColor: polished.darken(0.05, primaryColor),
    ':hover': {
      backgroundColor: polished.darken(0.1, primaryColor),
      borderColor: polished.darken(0.2, primaryColor),
    },
  },
  ({active}) => (active ? activeStyles : null)
)

export default AppButton
export {PrimaryButton}
