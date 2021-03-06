import {
  Button,
  ExpandIcon,
  Flex,
  IconButton,
  ShrinkIcon,
  SyncAltIcon,
  Text,
  TradingViewIcon,
  LineGraphIcon,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import { CurrencyLogo, DoubleCurrencyLogo } from 'components/Logo'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { ChartViewMode } from 'state/user/actions'
import { useExchangeChartViewManager } from 'state/user/hooks'
import styled from 'styled-components'
import BasicChart from './BasicChart'
import { StyledPriceChart } from './styles'
import TradingViewChart from './TradingViewChart'

const ChartButton = styled(Button)`
  background-color: ${({ $active, theme }) => $active && 'rgba(31, 199, 212, 0.06)'};
  padding: 4px 8px;
  border-radius: 6px;
`

const PriceChart = ({
  inputCurrency,
  outputCurrency,
  onSwitchTokens,
  isDark,
  isChartExpanded,
  setIsChartExpanded,
  isMobile,
  token0Address,
  token1Address,
  currentSwapPrice,
}) => {
  const { isDesktop } = useMatchBreakpoints()
  const toggleExpanded = () => setIsChartExpanded((currentIsExpanded) => !currentIsExpanded)
  const [chartView, setChartView] = useExchangeChartViewManager()
  const { t } = useTranslation()

  return (
    <StyledPriceChart
      height={chartView === ChartViewMode.TRADING_VIEW ? '100%' : '70%'}
      overflow={chartView === ChartViewMode.TRADING_VIEW ? 'hidden' : 'unset'}
      $isDark={isDark}
      $isExpanded={isChartExpanded}
    >
      <Flex justifyContent="space-between" px="24px">
        <Flex alignItems="center">
          {outputCurrency ? (
            <DoubleCurrencyLogo currency0={inputCurrency} currency1={outputCurrency} size={24} margin />
          ) : (
            inputCurrency && <CurrencyLogo currency={inputCurrency} size="24px" style={{ marginRight: '8px' }} />
          )}
          {inputCurrency && (
            <Text color="#280D5F" fontSize='14px'>
              {outputCurrency ? `${inputCurrency.symbol}/${outputCurrency.symbol}` : inputCurrency.symbol}
            </Text>
          )}
          <IconButton variant="text" onClick={onSwitchTokens}>
            <SyncAltIcon ml="6px" color="black" />
          </IconButton>
          <Flex>
            <ChartButton
              aria-label={t('Basic')}
              title={t('Basic')}
              $active={chartView === ChartViewMode.BASIC}
              scale="sm"
              variant="text"
              color="primary"
              onClick={() => setChartView(ChartViewMode.BASIC)}
              mr="8px"
            >
              {isDesktop ? <Text color='#DBBE62'>{t('Basic')}</Text> : <LineGraphIcon color="#DBBE62" />}
            </ChartButton>
            <ChartButton
              aria-label="TradingView"
              title="TradingView"
              $active={chartView === ChartViewMode.TRADING_VIEW}
              scale="sm"
              variant="text"
              onClick={() => setChartView(ChartViewMode.TRADING_VIEW)}
            >
              {isDesktop ? <Text color='#DBBE62'>{t('TradingView')}</Text> : <TradingViewIcon color="#DBBE62" />}
            </ChartButton>
          </Flex>
        </Flex>
        {!isMobile && (
          <Flex>
            <IconButton variant="text" onClick={toggleExpanded}>
              {isChartExpanded ? <ShrinkIcon color="black" /> : <ExpandIcon color="black" />}
            </IconButton>
          </Flex>
        )}
      </Flex>
      {chartView === ChartViewMode.BASIC && (
        <BasicChart
          token0Address={token0Address}
          token1Address={token1Address}
          isChartExpanded={isChartExpanded}
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          isMobile={isMobile}
          currentSwapPrice={currentSwapPrice}
        />
      )}
      {chartView === ChartViewMode.TRADING_VIEW && (
        <TradingViewChart
          // unmount the whole component when symbols is changed
          key={`${inputCurrency?.symbol}-${outputCurrency?.symbol}`}
          isChartExpanded={isChartExpanded}
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          token0Address={token0Address}
          isMobile={isMobile}
          isDark={isDark}
          currentSwapPrice={currentSwapPrice}
        />
      )}
    </StyledPriceChart>
  )
}

export default PriceChart
