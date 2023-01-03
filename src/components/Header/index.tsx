import { HeaderContainer, HeaderContent, NewtransactionsButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import headerLogo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={headerLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewtransactionsButton>Nova transação</NewtransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
