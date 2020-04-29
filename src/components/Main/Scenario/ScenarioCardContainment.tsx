import React from 'react'

import { FormikErrors, FormikTouched, FormikValues } from 'formik'

import { useTranslation } from 'react-i18next'

import { CardWithControls } from '../../Form/CardWithControls'
import { MitigationTable } from '../Mitigation/MitigationTable'
import { AllParams } from '../../../algorithms/types/Param.types'

export interface ScenarioCardContainmentProps {
  values: AllParams
  errors?: FormikErrors<FormikValues>
  touched?: FormikTouched<FormikValues>
}

function ScenarioCardContainment({ values, errors, touched }: ScenarioCardContainmentProps) {
  const { t } = useTranslation()

  const { mitigationIntervals } = values.containment

  return (
    <CardWithControls
      identifier="containmentScenario"
      label={<h3 className="p-0 d-inline text-truncate">{t('Mitigation')}</h3>}
      help={t(
        'Reduction of transmission through mitigation measures over time. Add or remove interventions. The intervention efficacy is specified as a range of plausible multiplicative reductions of the base growth rate',
      )}
    >
      <div className="w-auto">
        <MitigationTable mitigationIntervals={mitigationIntervals} errors={errors} touched={touched} />
      </div>
    </CardWithControls>
  )
}

export { ScenarioCardContainment }
