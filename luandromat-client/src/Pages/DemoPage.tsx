import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageContentLayout } from 'MainLayout/PageContentLayout'
import { Tabs } from 'base/Tabs'
import { TabItemConfig } from 'types/tabs'
import WashingMachineTabContent from 'components/WashingMachineTabContent'
import Home from './HomePage'

const DemoPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('Home')

  useEffect(() => {
    if (location.pathname === '/laundry') setActiveTab('Laundry')
    else setActiveTab('Home')
  }, [location.pathname])

  const handleChangeTab = (key: string) => {
    setActiveTab(key)
    navigate(key === 'Laundry' ? '/laundry' : '/')
  }

  const tabs: TabItemConfig[] = useMemo(
    () => [
      {
        key: 'Home',
        label: 'Home',
        content: <Home onStart={() => handleChangeTab('Laundry')} />,
      },
      {
        key: 'Laundry',
        label: 'Laundry',
        content: <WashingMachineTabContent />,
      },
    ],
    []
  )

  return (
    <PageContentLayout>
      <div className="px-0 overflow-hidden w-full">
        <div>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChangeTab={handleChangeTab}
          />
        </div>
      </div>
    </PageContentLayout>
  )
}

export default DemoPage
