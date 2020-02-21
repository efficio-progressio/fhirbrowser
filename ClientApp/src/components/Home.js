import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Sizing, minWidth } from '@material-ui/core';
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
                        <li key={item.name}>{this.renderResource(item)}</li>)
                    }
                </ul>
            </div>
        );
    }

    renderSubcategory2(name, items) {
        return (
            <Grid item>
                <Typography variant="h6">
                    {name}
                </Typography>
                <Typography variant="body1">
                    <ul className="subcategory">
                        {items.map(item =>
                            <li key={item.name}>{this.renderResource(item)}</li>)
                        }
                    </ul>
                </Typography>
            </Grid>
        );
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

    renderConformance() {
        return this.renderSubcategory(
            "Conformance",
            [
                { "name": "CapabilityStatement" },
                { "name": "StructureDefinition" },
                { "name": "ImplementationGuide" },
                { "name": "SearchParameter" },
                { "name": "MessageDefinition" },
                { "name": "OperationDefinition" },
                { "name": "CompartmentDefinition" },
                { "name": "StructureMap" },
                { "name": "GraphDefinition" },
                { "name": "ExampleScenario" }
            ]
        );
    }

    renderConformance2() {
        return this.renderSubcategory2(
            "Conformance",
            [
                { "name": "CapabilityStatement" },
                { "name": "StructureDefinition" },
                { "name": "ImplementationGuide" },
                { "name": "SearchParameter" },
                { "name": "MessageDefinition" },
                { "name": "OperationDefinition" },
                { "name": "CompartmentDefinition" },
                { "name": "StructureMap" },
                { "name": "GraphDefinition" },
                { "name": "ExampleScenario" }
            ]
        );
    }

    renderTerminology() {
        return this.renderSubcategory(
            "Terminology",
            [
                { "name": "CodeSystem" },
                { "name": "ValueSet" },
                { "name": "ConceptMap" },
                { "name": "NamingSystem" },
                { "name": "TerminologyCapabilities" }
            ]
        );
    }

    renderTerminology2() {
        return this.renderSubcategory2(
            "Terminology",
            [
                { "name": "CodeSystem" },
                { "name": "ValueSet" },
                { "name": "ConceptMap" },
                { "name": "NamingSystem" },
                { "name": "TerminologyCapabilities" }
            ]
        );
    }

    renderSecurity() {
        return this.renderSubcategory(
            "Security",
            [
                { "name": "Provenance" },
                { "name": "AuditEvent" },
                { "name": "Consent" }
            ]
        );
    }

    renderSecurity2() {
        return this.renderSubcategory2(
            "Security",
            [
                { "name": "Provenance" },
                { "name": "AuditEvent" },
                { "name": "Consent" }
            ]
        );
    }

    renderDocuments() {
        return this.renderSubcategory(
            "Documents",
            [
                { "name": "Composition" },
                { "name": "DocumentManifest" },
                { "name": "DocumentReference" },
                { "name": "CatalogEntry" }
            ]
        );
    }

    renderDocuments2() {
        return this.renderSubcategory2(
            "Documents",
            [
                { "name": "Composition" },
                { "name": "DocumentManifest" },
                { "name": "DocumentReference" },
                { "name": "CatalogEntry" }
            ]
        );
    }

    renderOther() {
        return this.renderSubcategory(
            "Other",
            [
                { "name": "Basic" },
                { "name": "Binary" },
                { "name": "Bundle" },
                { "name": "Linkage" },
                { "name": "MessageHeader" },
                { "name": "OperationOutcome" },
                { "name": "Parameters" },
                { "name": "Subscription" }
            ]
        );
    }

    renderOther2() {
        return this.renderSubcategory2(
            "Other",
            [
                { "name": "Basic" },
                { "name": "Binary" },
                { "name": "Bundle" },
                { "name": "Linkage" },
                { "name": "MessageHeader" },
                { "name": "OperationOutcome" },
                { "name": "Parameters" },
                { "name": "Subscription" }
            ]
        );
    }

    renderFoundation() {
        return (
            <div>
                <Paper style={{ "minWidth": 1000 }}>
                    <Grid container sm={12}>
                        <Grid item sm={1}>
                            <Typography variant="h4" className="vertical-text">
                                Foundation
                            </Typography>
                        </Grid>
                        <Grid container justify="space-evenly" alignItems="flex-start" sm={11}>
                            {this.renderConformance2()}
                            {this.renderTerminology2()}
                            {this.renderSecurity2()}
                            {this.renderDocuments2()}
                            {this.renderOther2()}
                        </Grid>
                    </Grid>
                </Paper>
                <div className="category">
                    <h3 className="vertical-text">Foundation</h3>
                    {this.renderConformance()}
                    {this.renderTerminology()}
                    {this.renderSecurity()}
                    {this.renderDocuments()}
                    {this.renderOther()}
                </div>
            </div>
        );
    }

    renderIndividuals() {
        return this.renderSubcategory(
            "Individuals",
            [
                { "name" : "Patient", "link" : "/patients" },
                { "name": "Practitioner" },
                { "name": "PractitionerRole" },
                { "name": "RelatedPerson" },
                { "name": "Person" },
                { "name": "Group" }
            ]
        );
    }

    renderEntities1() {
        return this.renderSubcategory(
            "Entities #1",
            [
                { "name": "Organization" },
                { "name": "OrganizationAffiliation" },
                { "name": "HealthcareService" },
                { "name": "Endpoint" },
                { "name": "Location" }
            ]
        );
    }

    renderEntities2() {
        return this.renderSubcategory(
            "Entities #2",
            [
                { "name": "Substances" },
                { "name": "BiologicallyDerivedProduct" },
                { "name": "Device" },
                { "name": "DeviceMetrics" }
            ]
        );
    }

    renderWorkflow() {
        return this.renderSubcategory(
            "Workflow",
            [
                { "name": "Task" },
                { "name": "Appointment" },
                { "name": "AppointmentResponse" },
                { "name": "Schedule" },
                { "name": "Slot" },
                { "name": "VerificationResult" }
            ]
        );
    }

    renderManagement() {
        return this.renderSubcategory(
            "Management",
            [
                { "name": "Encounter" },
                { "name": "EpisodeOfCare" },
                { "name": "Flag" },
                { "name": "List" },
                { "name": "Library" }
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
                { "name": "AllergyIntolerance" },
                { "name": "AdverseEvent" },
                { "name": "Condition" },
                { "name": "Procedure" },
                { "name": "FamilyMemberHistory" },
                { "name": "ClinicalImpression" },
                { "name": "DetectedIssue" }
            ]
        );
    }

    renderDiagnostics() {
        return this.renderSubcategory(
            "Diagnostics",
            [
                { "name": "Observation" },
                { "name": "Media" },
                { "name": "DiagnosticReport" },
                { "name": "Specimen" },
                { "name": "BodyStructure" },
                { "name": "ImagingStudy" },
                { "name": "QuestionnaireResponse" },
                { "name": "MolecularSequence" }
            ]
        );
    }

    renderMedications() {
        return this.renderSubcategory(
            "Medications",
            [
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
        );
    }

    renderCareProvision() {
        return this.renderSubcategory(
            "Care Provision",
            [
                { "name": "CarePlan" },
                { "name": "CareTeam" },
                { "name": "Goal" },
                { "name": "ServiceRequest" },
                { "name": "NutritionOrder" },
                { "name": "VisionPrescription" },
                { "name": "RiskAssessment" },
                { "name": "RequestGroup" }
            ]
        );
    }

    renderRequestResponse() {
        return this.renderSubcategory(
            "Request & Response",
            [
                { "name": "Communication" },
                { "name": "CommunicationRequest" },
                { "name": "DeviceRequest" },
                { "name": "DeviceUseStatement" },
                { "name": "GuidanceResponse" },
                { "name": "SupplyRequest" },
                { "name": "SupplyResponse" }
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
                { "name": "Coverage" },
                { "name": "CoverageEligibilityRequest" },
                { "name": "CoverageEligibilityResponse" },
                { "name": "EnrollmentRequest" },
                { "name": "EnrollmentResponse" }
            ]
        );
    }

    renderBilling() {
        return this.renderSubcategory(
            "Billing",
            [
                { "name": "Claim" },
                { "name": "ClaimResponse" },
                { "name": "Invoice" }
            ]
        );
    }

    renderPayment() {
        return this.renderSubcategory(
            "Payment",
            [
                { "name": "PaymentNotice" },
                { "name": "PaymentReconciliation" }
            ]
        );
    }

    renderGeneral() {
        return this.renderSubcategory(
            "General",
            [
                { "name": "Account" },
                { "name": "ChargeItem" },
                { "name": "ChargeItemDefinition" },
                { "name": "Contract" },
                { "name": "ExplanationOfBenefit" },
                { "name": "InsurancePlan" }
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
                { "name": "ResearchStudy" },
                { "name": "ResearchSubject" }
            ]
        );
    }

    renderDefinitionalArtifacts() {
        return this.renderSubcategory(
            "Definitional Artifacts",
            [
                { "name": "ActivityDefinition" },
                { "name": "DeviceDefinition" },
                { "name": "EventDefinition" },
                { "name": "ObservationDefinition" },
                { "name": "PlanDefinition" },
                { "name": "Questionnaire" },
                { "name": "SpecimenDefinition" }
            ]
        );
    }

    renderEvidenceBasedMedicine() {
        return this.renderSubcategory(
            "Evidence-Based Medicine",
            [
                { "name": "ResearchDefinition" },
                { "name": "ResearchElementDefinition" },
                { "name": "Evidence" },
                { "name": "EvidenceVariable" },
                { "name": "EffectEvidenceSynthesis" },
                { "name": "RiskEvidenceSynthesis" }
            ]
        );
    }

    renderQualityReportingTesting() {
        return this.renderSubcategory(
            <span>Quality Reporting<br /> & Testing</span>,
            [
                { "name": "Measure" },
                { "name": "MeasureReport" },
                { "name": "TestScript" },
                { "name": "TestReport" }
            ]
        );
    }

    renderMedicationDefinition() {
        return this.renderSubcategory(
            "Medication Definition",
            [
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
