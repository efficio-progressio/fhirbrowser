import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { resources: [], loading: true };
    }

    componentDidMount() {
        this.populateResourceData();
    }

    renderSubcategory(name, items) {
        return (
            <div className="subcategory">
                <h4>{name}</h4>
                <ul>
                    {items.map(item =>
                        <li>{this.renderResource(item)}</li>)
                    }
                </ul>
            </div>
        );
    }

    renderResource(name) {
        let resource = this.state.resources.find((e) => {
            return e.name === name;
        });

        return (resource !== undefined)
            ? <a href="#">{ name } (
                <span className="item-count">
                {
                    resource.count
                }</span>)</a>
            : <span>{ name }</span>;
    }

    renderConformance() {
        return this.renderSubcategory(
            "Conformance",
            [
                "CapabilityStatement",
                "StructureDefinition",
                "ImplementationGuide",
                "SearchParameter",
                "MessageDefinition",
                "OperationDefinition",
                "CompartmentDefinition",
                "StructureMap",
                "GraphDefinition",
                "ExampleScenario"
            ]
        );
    }

    renderTerminology() {
        return this.renderSubcategory(
            "Terminology",
            [
                "CodeSystem",
                "ValueSet",
                "ConceptMap",
                "NamingSystem",
                "TerminologyCapabilities"
            ]
        );
    }

    renderSecurity() {
        return this.renderSubcategory(
            "Security",
            [
                "Provenance",
                "AuditEvent",
                "Consent"
            ]
        );
    }

    renderDocuments() {
        return this.renderSubcategory(
            "Documents",
            [
                "Composition",
                "DocumentManifest",
                "DocumentReference",
                "CatalogEntry"
            ]
        );
    }

    renderOther() {
        return this.renderSubcategory(
            "Other",
            [
                "Basic",
                "Binary",
                "Bundle",
                "Linkage",
                "MessageHeader",
                "OperationOutcome",
                "Parameters",
                "Subscription"
            ]
        );
    }

    renderFoundation() {
        return (
            <div className="category">
                <h3 className="vertical-text">Foundation</h3>
                {this.renderConformance()}
                {this.renderTerminology()}
                {this.renderSecurity()}
                {this.renderDocuments()}
                {this.renderOther()}
            </div>
        );
    }

    renderIndividuals() {
        return this.renderSubcategory(
            "Individuals",
            [
                "Patient",
                "Practitioner",
                "PractitionerRole",
                "RelatedPerson",
                "Person",
                "Group"
            ]
        );
    }

    renderEntities1() {
        return this.renderSubcategory(
            "Entities #1",
            [
                "Organization",
                "OrganizationAffiliation",
                "HealthcareService",
                "Endpoint",
                "Location"
            ]
        );
    }

    renderEntities2() {
        return this.renderSubcategory(
            "Entities #2",
            [
                "Substances",
                "BiologicallyDerivedProduct",
                "Device",
                "DeviceMetrics"
            ]
        );
    }

    renderWorkflow() {
        return this.renderSubcategory(
            "Workflow",
            [
                "Task",
                "Appointment",
                "AppointmentResponse",
                "Schedule",
                "Slot",
                "VerificationResult"
            ]
        );
    }

    renderManagement() {
        return this.renderSubcategory(
            "Management",
            [
                "Encounter",
                "EpisodeOfCare",
                "Flag",
                "List",
                "Library"
            ]
        );
    }

    renderBase() {
        return (
            <div className="category">
                <h3 className="vertical-text">Base</h3>

                {this.renderIndividuals()}
                {this.renderEntities1()}
                {this.renderEntities2()}
                {this.renderWorkflow()}
                {this.renderManagement()}
            </div>
        );
    }

    renderSummary() {
        return this.renderSubcategory(
            "Summary",
            [
                "AllergyIntolerance",
                "AdverseEvent",
                "Condition",
                "Procedure",
                "FamilyMemberHistory",
                "ClinicalImpression",
                "DetectedIssue"
            ]
        );
    }

    renderDiagnostics() {
        return this.renderSubcategory(
            "Diagnostics",
            [
                "Observation",
                "Media",
                "DiagnosticReport",
                "Specimen",
                "BodyStructure",
                "ImagingStudy",
                "QuestionnaireResponse",
                "MolecularSequence"
            ]
        );
    }

    renderMedications() {
        return this.renderSubcategory(
            "Medications",
            [
                "MedicationRequest",
                "MedicationAdministration",
                "MedicationDispense",
                "MedicationStatement",
                "Medication",
                "MedicationKnowledge",
                "Immunization",
                "ImmunizationEvaluation",
                "ImmunizationRecommendation"
            ]
        );
    }

    renderCareProvision() {
        return this.renderSubcategory(
            "Care Provision",
            [
                "CarePlan",
                "CareTeam",
                "Goal",
                "ServiceRequest",
                "NutritionOrder",
                "VisionPrescription",
                "RiskAssessment",
                "RequestGroup"
            ]
        );
    }

    renderRequestResponse() {
        return this.renderSubcategory(
            "Request & Response",
            [
                "Communication",
                "CommunicationRequest",
                "DeviceRequest",
                "DeviceUseStatement",
                "GuidanceResponse",
                "SupplyRequest",
                "SupplyResponse"
            ]
        );
    }

    renderClinical() {
        return (
            <div className="category">
                <h3 className="vertical-text">Clinical</h3>

                {this.renderSummary()}
                {this.renderDiagnostics()}
                {this.renderMedications()}
                {this.renderCareProvision()}
                {this.renderRequestResponse()}
            </div>
        );
    }

    renderSupport() {
        return this.renderSubcategory(
            "Support",
            [
                "Coverage",
                "CoverageEligibilityRequest",
                "CoverageEligibilityResponse",
                "EnrollmentRequest",
                "EnrollmentResponse"
            ]
        );
    }

    renderBilling() {
        return this.renderSubcategory(
            "Billing",
            [
                "Claim",
                "ClaimResponse",
                "Invoice"
            ]
        );
    }

    renderPayment() {
        return this.renderSubcategory(
            "Payment",
            [
                "PaymentNotice",
                "PaymentReconciliation"
            ]
        );
    }

    renderGeneral() {
        return this.renderSubcategory(
            "General",
            [
                "Account",
                "ChargeItem",
                "ChargeItemDefinition",
                "Contract",
                "ExplanationOfBenefit",
                "InsurancePlan"
            ]
        );
    }

    renderFinancial() {
        return (
            <div className="category">
                <h3 className="vertical-text">Financial</h3>

                {this.renderSupport()}
                {this.renderBilling()}
                {this.renderPayment()}
                {this.renderGeneral()}
            </div>
        );
    }

    renderPublicHealthResearch() {
        return this.renderSubcategory(
            "Public Health & Research",
            [
                "ResearchStudy",
                "ResearchSubject"
            ]
        );
    }

    renderDefinitionalArtifacts() {
        return this.renderSubcategory(
            "Definitional Artifacts",
            [
                "ActivityDefinition",
                "DeviceDefinition",
                "EventDefinition",
                "ObservationDefinition",
                "PlanDefinition",
                "Questionnaire",
                "SpecimenDefinition"
            ]
        );
    }

    renderEvidenceBasedMedicine() {
        return this.renderSubcategory(
            "Evidence-Based Medicine",
            [
                "ResearchDefinition",
                "ResearchElementDefinition",
                "Evidence",
                "EvidenceVariable",
                "EffectEvidenceSynthesis",
                "RiskEvidenceSynthesis"
            ]
        );
    }

    renderQualityReportingTesting() {
        return this.renderSubcategory(
            <span>Quality Reporting<br /> & Testing</span>,
            [
                "Measure",
                "MeasureReport",
                "TestScript",
                "TestReport"
            ]
        );
    }

    renderMedicationDefinition() {
        return this.renderSubcategory(
            "Medication Definition",
            [
                "MedicinalProduct",
                "MedicinalProductAuthorization",
                "MedicinalProductContraindication",
                "MedicinalProductIndication",
                "MedicinalProductIngredient",
                "MedicinalProductInteraction",
                "MedicinalProductManufactured",
                "MedicinalProductPackaged",
                "MedicinalProductPharmaceutical",
                "MedicinalProductUndesirableEffect",
                "SubstanceNucleicAcid",
                "SubstancePolymer",
                "SubstanceProtein",
                "SubstanceReferenceInformation",
                "SubstanceSpecification",
                "SubstanceSourceMaterial"
            ]
        );
    }

    renderSpecialized() {
        return (
            <div className="category">
                <h3 className="vertical-text">Specialized</h3>
                {this.renderPublicHealthResearch()}
                {this.renderDefinitionalArtifacts()}
                {this.renderEvidenceBasedMedicine()}
                {this.renderQualityReportingTesting()}
                {this.renderMedicationDefinition()}
            </div>
        );
    }

    renderResources() {
        let resources = this.state.resources;

        return (
            <div>
                { this.renderFoundation() }
                { this.renderBase() }
                { this.renderClinical() }
                { this.renderFinancial() }
                { this.renderSpecialized() }
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
