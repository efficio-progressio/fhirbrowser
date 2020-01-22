import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <div className="category">
                <h3 className="vertical-text">Foundation</h3>

                <div className="subcategory">
                    <h4>Conformance</h4>
                    <ul>
                        <li>CapabilityStatement</li>
                        <li>StructureDefinition</li>
                        <li>ImplementationGuide</li>
                        <li>SearchParameter</li>
                        <li>MessageDefinition</li>
                        <li>OperationDefinition</li>
                        <li>CompartmentDefinition</li>
                        <li>StructureMap</li>
                        <li>GraphDefinition</li>
                        <li>ExampleScenario</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Terminology</h4>
                    <ul>
                        <li>CodeSystem</li>
                        <li>ValueSet</li>
                        <li>ConceptMap</li>
                        <li>NamingSystem</li>
                        <li>TerminologyCapabilities</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Security</h4>
                    <ul>
                        <li>Provenance</li>
                        <li>AuditEvent</li>
                        <li>Consent</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Documents</h4>
                    <ul>
                        <li>Composition</li>
                        <li>DocumentManifest</li>
                        <li>DocumentReference</li>
                        <li>CatalogEntry</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Other</h4>
                    <ul>
                        <li>Basic</li>
                        <li>Binary</li>
                        <li>Bundle</li>
                        <li>Linkage</li>
                        <li>MessageHeader</li>
                        <li>OperationOutcome</li>
                        <li>Parameters</li>
                        <li>Subscription</li>
                    </ul>
                </div>
            </div>
            <div className="category">
                <h3 className="vertical-text">Base</h3>

                <div className="subcategory">
                    <h4>Individuals</h4>
                    <ul>
                        <li>Patient</li>
                        <li>Practitioner</li>
                        <li>PractitionerRole</li>
                        <li>RelatedPerson</li>
                        <li>Person</li>
                        <li>Group</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Entities #1</h4>
                    <ul>
                        <li>Organization</li>
                        <li>OrganizationAffiliation</li>
                        <li>HealthcareService</li>
                        <li>Endpoint</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Entities #2</h4>
                    <ul>
                        <li>Substance</li>
                        <li>BiologicallyDerivedProduct</li>
                        <li>Device</li>
                        <li>DeviceMetric</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Workflow</h4>
                    <ul>
                        <li>Task</li>
                        <li>Appointment</li>
                        <li>AppointmentResponse</li>
                        <li>Schedule</li>
                        <li>Slot</li>
                        <li>VerificationResult</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Management</h4>
                    <ul>
                        <li>Encounter</li>
                        <li>EpisodeOfCare</li>
                        <li>Flag</li>
                        <li>List</li>
                        <li>Library</li>
                    </ul>
                </div>
            </div>
            <div className="category">
                <h3 className="vertical-text">Clinical</h3>

                <div className="subcategory">
                    <h4>Summary</h4>
                    <ul>
                        <li>AllergyIntolerance</li>
                        <li>AdverseEvent</li>
                        <li>Condition</li>
                        <li>Procedure</li>
                        <li>FamilyMemberHistory</li>
                        <li>ClinicalImpression</li>
                        <li>DetectedIssue</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Diagnostics</h4>
                    <ul>
                        <li>Observation</li>
                        <li>Media</li>
                        <li>DiagnosticReport</li>
                        <li>Specimen</li>
                        <li>BodyStructure</li>
                        <li>ImagingStudy</li>
                        <li>QuestionnaireResponse</li>
                        <li>MolecularSequence</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Medications</h4>
                    <ul>
                        <li>MedicationRequest</li>
                        <li>MedicationAdministration</li>
                        <li>MedicationDispense</li>
                        <li>MedicationStatement</li>
                        <li>Medication</li>
                        <li>MedicationKnowledge</li>
                        <li>Immunization</li>
                        <li>ImmunizationEvaluation</li>
                        <li>ImmunizationRecommendation</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Care Provision</h4>
                    <ul>
                        <li>CarePlan</li>
                        <li>CareTeam</li>
                        <li>Goal</li>
                        <li>ServiceRequest</li>
                        <li>NutritionOrder</li>
                        <li>VisionPrescription</li>
                        <li>RiskAssessment</li>
                        <li>RequestGroup</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Request & Response</h4>
                    <ul>
                        <li>Communication</li>
                        <li>CommunicationRequest</li>
                        <li>DeviceRequest</li>
                        <li>DeviceUseStatement</li>
                        <li>GuidanceResponse</li>
                        <li>SupplyRequest</li>
                        <li>SupplyDelivery</li>
                    </ul>
                </div>
            </div>
            <div className="category">
                <h3 className="vertical-text">Financial</h3>

                <div className="subcategory">
                    <h4>Support</h4>
                    <ul>
                        <li>Coverage</li>
                        <li>CoverageEligibilityRequest</li>
                        <li>CoverageEligibilityResponse</li>
                        <li>EnrollmentRequest</li>
                        <li>EnrollmentResponse</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Billing</h4>
                    <ul>
                        <li>Claim</li>
                        <li>ClaimResponse</li>
                        <li>Invoice</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Payment</h4>
                    <ul>
                        <li>PaymentNotice</li>
                        <li>PaymentReconciliation</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>General</h4>
                    <ul>
                        <li>Account</li>
                        <li>ChargeItem</li>
                        <li>ChargeItemDefinition</li>
                        <li>Contract</li>
                        <li>ExplanationOfBenefit</li>
                        <li>InsurancePlan</li>
                    </ul>
                </div>
            </div>
            <div className="category">
                <h3 className="vertical-text">Specialized</h3>

                <div className="subcategory">
                    <h4>Public Health & Research</h4>
                    <ul>
                        <li>ResearchStudy</li>
                        <li>ResearchSubject</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Definitional Artifacts</h4>
                    <ul>
                        <li>ActivityDefinition</li>
                        <li>DeviceDefinition</li>
                        <li>EventDefinition</li>
                        <li>ObservationDefinition</li>
                        <li>PlanDefinition</li>
                        <li>Questionnaire</li>
                        <li>SpecimenDefinition</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Evidence-Based Medicine</h4>
                    <ul>
                        <li>ResearchDefinition</li>
                        <li>ResearchElementDefinition</li>
                        <li>Evidence</li>
                        <li>EvidenceVariable</li>
                        <li>EffectEvidenceSynthesis</li>
                        <li>RiskEvidenceSynthesis</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Quality Reporting<br /> & Testing</h4>
                    <ul>
                        <li>Measure</li>
                        <li>MeasureReport</li>
                        <li>TestScript</li>
                        <li>TestReport</li>
                    </ul>
                </div>
                <div className="subcategory">
                    <h4>Medication Definition</h4>
                    <ul>
                        <li>MedicinalProduct</li>
                        <li>MedicinalProductAuthorization</li>
                        <li>MedicinalProductContraindication</li>
                        <li>MedicinalProductIndication</li>
                        <li>MedicinalProductIngredient</li>
                        <li>MedicinalProductInteraction</li>
                        <li>MedicinalProductManufactured</li>
                        <li>MedicinalProductPackaged</li>
                        <li>MedicinalProductPharmaceutical</li>
                        <li>MedicinalProductUndesirableEffect</li>
                        <li>SubstanceNucleicAcid</li>
                        <li>SubstancePolymer</li>
                        <li>SubstanceProtein</li>
                        <li>SubstanceReferenceInformation</li>
                        <li>SubstanceSpecification</li>
                        <li>SubstanceSourceMaterial</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
