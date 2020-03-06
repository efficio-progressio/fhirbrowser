import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Sizing, minWidth } from '@material-ui/core';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    static content = [
        {
            name: "Foundation",
            subcategories: [
                {
                    name: "Conformance",
                    resources: [
                        { name: "CapabilityStatement" },
                        { name: "StructureDefinition" },
                        { name: "ImplementationGuide" },
                        { name: "SearchParameter" },
                        { name: "MessageDefinition" },
                        { name: "OperationDefinition" },
                        { name: "CompartmentDefinition" },
                        { name: "StructureMap" },
                        { name: "GraphDefinition" },
                        { name: "ExampleScenario" }
                    ]
                },
                {
                    name: "Terminology",
                    resources: [
                        { name: "CodeSystem" },
                        { name: "ValueSet" },
                        { name: "ConceptMap" },
                        { name: "NamingSystem" },
                        { name: "TerminologyCapabilities" }
                    ]
                },
                {
                    name: "Security",
                    resources: [
                        { name: "Provenance" },
                        { name: "AuditEvent" },
                        { name: "Consent" }
                    ]
                },
                {
                    name: "Documents",
                    resources: [
                        { name: "Composition" },
                        { name: "DocumentManifest" },
                        { name: "DocumentReference" },
                        { name: "CatalogEntry" }
                    ]
                },
                {
                    name: "Other",
                    resources: [
                        { name: "Basic" },
                        { name: "Binary" },
                        { name: "Bundle" },
                        { name: "Linkage" },
                        { name: "MessageHeader" },
                        { name: "OperationOutcome" },
                        { name: "Parameters" },
                        { name: "Subscription" }
                    ]
                }
            ]
        },
        {
            name: "Base",
            subcategories: [
                {
                    name: "Individuals",
                    resources: [
                        { "name": "Patient", "link": "/patients" },
                        { "name": "Practitioner" },
                        { "name": "PractitionerRole" },
                        { "name": "RelatedPerson" },
                        { "name": "Person" },
                        { "name": "Group" }
                    ]
                },
                {
                    name: "Entities #1",
                    resources: [
                        { "name": "Organization" },
                        { "name": "OrganizationAffiliation" },
                        { "name": "HealthcareService" },
                        { "name": "Endpoint" },
                        { "name": "Location" }
                    ]
                },
                {
                    name: "Entities #2",
                    resources: [
                        { "name": "Substances" },
                        { "name": "BiologicallyDerivedProduct" },
                        { "name": "Device" },
                        { "name": "DeviceMetrics" }
                    ]
                },
                {
                    name: "Workflow",
                    resources: [
                        { "name": "Task" },
                        { "name": "Appointment" },
                        { "name": "AppointmentResponse" },
                        { "name": "Schedule" },
                        { "name": "Slot" },
                        { "name": "VerificationResult" }
                    ]
                },
                {
                    name: "Management",
                    resources: [
                        { "name": "Encounter" },
                        { "name": "EpisodeOfCare" },
                        { "name": "Flag" },
                        { "name": "List" },
                        { "name": "Library" }
                    ]
                }
            ]
        },
        {
            name: "Clinical",
            subcategories: [
                {
                    name: "Summary",
                    resources: [
                        { "name": "AllergyIntolerance" },
                        { "name": "AdverseEvent" },
                        { "name": "Condition" },
                        { "name": "Procedure" },
                        { "name": "FamilyMemberHistory" },
                        { "name": "ClinicalImpression" },
                        { "name": "DetectedIssue" }
                    ]
                },
                {
                    name: "Diagnostics",
                    resources: [
                        { "name": "Observation" },
                        { "name": "Media" },
                        { "name": "DiagnosticReport" },
                        { "name": "Specimen" },
                        { "name": "BodyStructure" },
                        { "name": "ImagingStudy" },
                        { "name": "QuestionnaireResponse" },
                        { "name": "MolecularSequence" }
                    ]
                },
                {
                    name: "Medications",
                    resources: [
                        { "name": "MedicationRequest" },
                        { "name": "MedicationAdministration" },
                        { "name": "MedicationDispense" },
                        { "name": "MedicationStatement" },
                        { "name": "Medication" },
                        { "name": "MedicationKnowledge" },
                        { "name": "Immunization" },
                        { "name": "ImmunizationEvaluation" },
                        { "name": "ImmunizationRecommendation" }
                    ]
                },
                {
                    name: "Care Provision",
                    resources: [
                        { "name": "CarePlan" },
                        { "name": "CareTeam" },
                        { "name": "Goal" },
                        { "name": "ServiceRequest" },
                        { "name": "NutritionOrder" },
                        { "name": "VisionPrescription" },
                        { "name": "RiskAssessment" },
                        { "name": "RequestGroup" }
                    ]
                },
                {
                    name: "Request & Response",
                    resources: [
                        { "name": "Communication" },
                        { "name": "CommunicationRequest" },
                        { "name": "DeviceRequest" },
                        { "name": "DeviceUseStatement" },
                        { "name": "GuidanceResponse" },
                        { "name": "SupplyRequest" },
                        { "name": "SupplyResponse" }
                    ]
                }
            ]
        },
        {
            name: "Financial",
            subcategories: [
                {
                    name: "Support",
                    resources: [
                        { "name": "Coverage" },
                        { "name": "CoverageEligibilityRequest" },
                        { "name": "CoverageEligibilityResponse" },
                        { "name": "EnrollmentRequest" },
                        { "name": "EnrollmentResponse" }
                    ]
                },
                {
                    name: "Billing",
                    resources: [
                        { "name": "Claim" },
                        { "name": "ClaimResponse" },
                        { "name": "Invoice" }
                    ]
                },
                {
                    name: "Payment",
                    resources: [
                        { "name": "PaymentNotice" },
                        { "name": "PaymentReconciliation" }
                    ]
                },
                {
                    name: "General",
                    resources: [
                        { "name": "Account" },
                        { "name": "ChargeItem" },
                        { "name": "ChargeItemDefinition" },
                        { "name": "Contract" },
                        { "name": "ExplanationOfBenefit" },
                        { "name": "InsurancePlan" }
                    ]
                }
            ]
        },
        {
            name: "Specialized",
            subcategories: [
                {
                    name: "Public Health & Research",
                    resources: [
                        { "name": "ResearchStudy" },
                        { "name": "ResearchSubject" }
                    ]
                },
                {
                    name: "Definitional Artifacts",
                    resources: [
                        { "name": "ActivityDefinition" },
                        { "name": "DeviceDefinition" },
                        { "name": "EventDefinition" },
                        { "name": "ObservationDefinition" },
                        { "name": "PlanDefinition" },
                        { "name": "Questionnaire" },
                        { "name": "SpecimenDefinition" }
                    ]
                },
                {
                    name: "Evidence-Based Medicine",
                    resources: [
                        { "name": "ResearchDefinition" },
                        { "name": "ResearchElementDefinition" },
                        { "name": "Evidence" },
                        { "name": "EvidenceVariable" },
                        { "name": "EffectEvidenceSynthesis" },
                        { "name": "RiskEvidenceSynthesis" }
                    ]
                },
                {
                    name: <span>Quality Reporting<br />& Testing</span>,
                    resources: [
                        { "name": "Measure" },
                        { "name": "MeasureReport" },
                        { "name": "TestScript" },
                        { "name": "TestReport" }
                    ]
                },
                {
                    name: "Medication Definition",
                    resources: [
                        { "name": "MedicinalProduct" },
                        { "name": "MedicinalProductAuthorization" },
                        { "name": "MedicinalProductContraindication" },
                        { "name": "MedicinalProductIndication" },
                        { "name": "MedicinalProductIngredient" },
                        { "name": "MedicinalProductInteraction" },
                        { "name": "MedicinalProductManufactured" },
                        { "name": "MedicinalProductPackaged" },
                        { "name": "MedicinalProductPharmaceutical" },
                        { "name": "MedicinalProductUndesirableEffect" },
                        { "name": "SubstanceNucleicAcid" },
                        { "name": "SubstancePolymer" },
                        { "name": "SubstanceProtein" },
                        { "name": "SubstanceReferenceInformation" },
                        { "name": "SubstanceSpecification" },
                        { "name": "SubstanceSourceMaterial" }
                    ]
                }
            ]
        }
    ]

    constructor(props) {
        super(props);
        this.state = { resources: [], loading: true };
    }

    componentDidMount() {
        this.populateResourceData();
    }

    renderResource(item) {
        let resource = this.state.resources.find((e) => {
            return e.name === item.name;
        });

        return (resource !== undefined)
            ? (item.link !== undefined)
                ? <Link to = { item.link } > { item.name } (
                    <span className="item-count">
                        {
                                resource.count
                    }</span>)
                   </Link>
                : <a href="#">{ item.name } (
                    <span className="item-count">
                        {
                            resource.count
                        }</span>)</a>
            : <span>{item.name}</span>;
    }

    renderSubcategory(subcategory) {
        return (
            <Grid item>
                <Typography variant="h6">
                    { subcategory.name }
                </Typography>
                <Typography variant="body2">
                    <ul className="subcategory">
                        {subcategory.resources.map(item =>
                            <li key={item.name}>{this.renderResource(item)}</li>)
                        }
                    </ul>
                </Typography>
            </Grid>
        );
    }

    renderCategory(category) {
        return (
            <Paper style={{ "minWidth": 1300, "marginBottom" : 10 }}>
                <Grid container alignItems="center" sm={12}>
                    <Grid item sm={1}>
                        <Typography variant="h4" className="vertical-text">
                            { category.name }
                        </Typography>
                    </Grid>
                    <Grid container justify="space-evenly" alignItems="flex-start" sm={11}>
                        { category.subcategories.map(subcategory => this.renderSubcategory(subcategory)) }
                    </Grid>
                </Grid>
            </Paper>
        )
    }

    renderResources() {
        return (
            <div>
                { Home.content.map(category => this.renderCategory(category)) }
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderResources();

        return (
            <div>
                {contents}
            </div>
        );
    }


    async populateResourceData() {
        const response = await fetch('api/fhirresources');
        const data = await response.json();
        this.setState({ resources: data, loading: false });
    }
}
