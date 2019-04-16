"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../../../src/date-extensions");
class Base {
    constructor(obj) {
        if (obj) {
            if (obj.fhir_comments) {
                this.fhir_comments = obj.fhir_comments;
            }
        }
    }
}
exports.Base = Base;
class Element extends Base {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.id) {
                this.id = obj.id;
            }
            if (obj.extension) {
                this.extension = [];
                for (let o of obj.extension || []) {
                    this.extension.push(new Extension(o));
                }
            }
        }
    }
}
exports.Element = Element;
class Extension extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('valueCode')) {
                this.valueCode = obj.valueCode;
            }
            if (obj.hasOwnProperty('valueString')) {
                this.valueString = obj.valueString;
            }
            if (obj.valueCodeableConcept) {
                this.valueCodeableConcept = obj.valueCodeableConcept;
            }
            if (obj.valueCoding) {
                this.valueCoding = obj.valueCoding;
            }
            if (obj.hasOwnProperty('valueBoolean')) {
                this.valueBoolean = obj.valueBoolean;
            }
            if (obj.valueReference) {
                this.valueReference = new ResourceReference(obj.valueReference);
            }
        }
    }
}
exports.Extension = Extension;
class Coding extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.userSelected) {
                this.userSelected = obj.userSelected;
            }
        }
    }
}
exports.Coding = Coding;
class Meta extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.versionId) {
                this.versionId = obj.versionId;
            }
            if (obj.lastUpdated) {
                this.lastUpdated = new Date(obj.lastUpdated);
            }
            if (obj.profile) {
                this.profile = obj.profile;
            }
            if (obj.security) {
                this.security = [];
                for (let o of obj.security || []) {
                    this.security.push(new Coding(o));
                }
            }
            if (obj.tag) {
                this.tag = [];
                for (let o of obj.tag || []) {
                    this.tag.push(new Coding(o));
                }
            }
        }
    }
}
exports.Meta = Meta;
class Resource extends Base {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.id) {
                this.id = obj.id;
            }
            if (obj.meta) {
                this.meta = new Meta(obj.meta);
            }
            if (obj.implicitRules) {
                this.implicitRules = obj.implicitRules;
            }
            if (obj.language) {
                this.language = obj.language;
            }
        }
    }
}
exports.Resource = Resource;
class Narrative extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.div) {
                this.div = obj.div;
            }
        }
    }
}
exports.Narrative = Narrative;
class DomainResource extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DomainResource';
        if (obj) {
            if (obj.text) {
                this.text = new Narrative(obj.text);
            }
            if (obj.contained) {
                this.contained = [];
                for (let o of obj.contained || []) {
                    this.contained.push(new DomainResource(o));
                }
            }
            if (obj.extension) {
                this.extension = [];
                for (let o of obj.extension || []) {
                    this.extension.push(new Extension(o));
                }
            }
            if (obj.modifierExtension) {
                this.modifierExtension = [];
                for (let o of obj.modifierExtension || []) {
                    this.modifierExtension.push(new Extension(o));
                }
            }
        }
    }
}
exports.DomainResource = DomainResource;
class CodeableConcept extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.coding) {
                this.coding = [];
                for (let o of obj.coding || []) {
                    this.coding.push(new Coding(o));
                }
            }
            if (obj.text) {
                this.text = obj.text;
            }
        }
    }
}
exports.CodeableConcept = CodeableConcept;
class Period extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.start) {
                this.start = new Date(obj.start);
            }
            if (obj.end) {
                this.end = new Date(obj.end);
            }
        }
    }
}
exports.Period = Period;
class ResourceReference extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.reference) {
                this.reference = obj.reference;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.display) {
                this.display = obj.display;
            }
        }
    }
}
exports.ResourceReference = ResourceReference;
class Identifier extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.value) {
                this.value = obj.value;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.assigner) {
                this.assigner = new ResourceReference(obj.assigner);
            }
        }
    }
}
exports.Identifier = Identifier;
class ContactPoint extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.value) {
                this.value = obj.value;
            }
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.rank) {
                this.rank = obj.rank;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.ContactPoint = ContactPoint;
class ContactDetail extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
        }
    }
}
exports.ContactDetail = ContactDetail;
class UsageContext extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new Coding(obj.code);
            }
            if (obj.valueCodeableConcept) {
                this.valueCodeableConcept = new CodeableConcept(obj.valueQuantity);
            }
            if (obj.valueQuantity) {
                this.valueQuantity = new Quantity(obj.valueQuantity);
            }
            if (obj.valueRange) {
                this.valueRange = new Range(obj.valueRange);
            }
        }
    }
}
exports.UsageContext = UsageContext;
class BackboneElement extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.modifierExtension) {
                this.modifierExtension = [];
                for (let o of obj.modifierExtension || []) {
                    this.modifierExtension.push(new Extension(o));
                }
            }
        }
    }
}
exports.BackboneElement = BackboneElement;
class ElementDefinitionMappingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identity) {
                this.identity = obj.identity;
            }
            if (obj.language) {
                this.language = obj.language;
            }
            if (obj.map) {
                this.map = obj.map;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.ElementDefinitionMappingComponent = ElementDefinitionMappingComponent;
class MappingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identity) {
                this.identity = obj.identity;
            }
            if (obj.uri) {
                this.uri = obj.uri;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.MappingComponent = MappingComponent;
class DiscriminatorComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.path) {
                this.path = obj.path;
            }
        }
    }
}
exports.DiscriminatorComponent = DiscriminatorComponent;
class SlicingComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.discriminator) {
                this.discriminator = [];
                for (let o of obj.discriminator || []) {
                    this.discriminator.push(new DiscriminatorComponent(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.ordered) {
                this.ordered = obj.ordered;
            }
            if (obj.rules) {
                this.rules = obj.rules;
            }
        }
    }
}
exports.SlicingComponent = SlicingComponent;
class BaseComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.min) {
                this.min = obj.min;
            }
            if (obj.max) {
                this.max = obj.max;
            }
        }
    }
}
exports.BaseComponent = BaseComponent;
class TypeRefComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.profile) {
                this.profile = obj.profile;
            }
            if (obj.targetProfile) {
                this.targetProfile = obj.targetProfile;
            }
            if (obj.aggregation) {
                this.aggregation = obj.aggregation;
            }
            if (obj.versioning) {
                this.versioning = obj.versioning;
            }
        }
    }
}
exports.TypeRefComponent = TypeRefComponent;
class ExampleComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.label) {
                this.label = obj.label;
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.ExampleComponent = ExampleComponent;
class ConstraintComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.key) {
                this.key = obj.key;
            }
            if (obj.requirements) {
                this.requirements = obj.requirements;
            }
            if (obj.severity) {
                this.severity = obj.severity;
            }
            if (obj.human) {
                this.human = obj.human;
            }
            if (obj.expression) {
                this.expression = obj.expression;
            }
            if (obj.xpath) {
                this.xpath = obj.xpath;
            }
            if (obj.source) {
                this.source = obj.source;
            }
        }
    }
}
exports.ConstraintComponent = ConstraintComponent;
class ElementDefinitionBindingComponent extends Element {
    get valueSet() {
        return this.valueSetUri || this.valueSetReference;
    }
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.strength) {
                this.strength = obj.strength;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.valueSetUri) {
                this.valueSetUri = obj.valueSetUri;
            }
            if (obj.valueSetReference) {
                this.valueSetReference = new ResourceReference(obj.valueSetReference);
            }
        }
    }
}
exports.ElementDefinitionBindingComponent = ElementDefinitionBindingComponent;
class ElementDefinition extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.representation) {
                this.representation = obj.representation;
            }
            if (obj.sliceName) {
                this.sliceName = obj.sliceName;
            }
            if (obj.label) {
                this.label = obj.label;
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.slicing) {
                this.slicing = new SlicingComponent(obj.slicing);
            }
            if (obj.short) {
                this.short = obj.short;
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.requirements) {
                this.requirements = obj.requirements;
            }
            if (obj.alias) {
                this.alias = obj.alias;
            }
            if (obj.min) {
                this.min = obj.min;
            }
            if (obj.max) {
                this.max = obj.max;
            }
            if (obj.base) {
                this.base = new BaseComponent(obj.base);
            }
            if (obj.contentReference) {
                this.contentReference = obj.contentReference;
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new TypeRefComponent(o));
                }
            }
            if (obj.defaultValue) {
                this.defaultValue = new Element(obj.defaultValue);
            }
            if (obj.meaningWhenMissing) {
                this.meaningWhenMissing = obj.meaningWhenMissing;
            }
            if (obj.orderMeaning) {
                this.orderMeaning = obj.orderMeaning;
            }
            if (obj.fixed) {
                this.fixed = new Element(obj.fixed);
            }
            if (obj.pattern) {
                this.pattern = new Element(obj.pattern);
            }
            if (obj.example) {
                this.example = [];
                for (let o of obj.example || []) {
                    this.example.push(new ExampleComponent(o));
                }
            }
            if (obj.minValue) {
                this.minValue = new Element(obj.minValue);
            }
            if (obj.maxValue) {
                this.maxValue = new Element(obj.maxValue);
            }
            if (obj.maxLength) {
                this.maxLength = obj.maxLength;
            }
            if (obj.condition) {
                this.condition = obj.condition;
            }
            if (obj.constraint) {
                this.constraint = [];
                for (let o of obj.constraint || []) {
                    this.constraint.push(new ConstraintComponent(o));
                }
            }
            if (obj.mustSupport) {
                this.mustSupport = obj.mustSupport;
            }
            if (obj.isModifier) {
                this.isModifier = obj.isModifier;
            }
            if (obj.isSummary) {
                this.isSummary = obj.isSummary;
            }
            if (obj.binding) {
                this.binding = new ElementDefinitionBindingComponent(obj.binding);
            }
            if (obj.mapping) {
                this.mapping = [];
                for (let o of obj.mapping || []) {
                    this.mapping.push(new ElementDefinitionMappingComponent(o));
                }
            }
        }
    }
}
exports.ElementDefinition = ElementDefinition;
class SnapshotComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.element) {
                this.element = [];
                for (let o of obj.element || []) {
                    this.element.push(new ElementDefinition(o));
                }
            }
        }
    }
}
exports.SnapshotComponent = SnapshotComponent;
class DifferentialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.element) {
                this.element = [];
                for (let o of obj.element || []) {
                    this.element.push(new ElementDefinition(o));
                }
            }
        }
    }
}
exports.DifferentialComponent = DifferentialComponent;
class StructureDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'StructureDefinition';
        this.status = 'draft';
        this.kind = 'resource';
        this.abstract = false;
        this.derivation = 'constraint';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.keyword) {
                this.keyword = [];
                for (let o of obj.keyword || []) {
                    this.keyword.push(new Coding(o));
                }
            }
            if (obj.fhirVersion) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.mapping) {
                this.mapping = [];
                for (let o of obj.mapping || []) {
                    this.mapping.push(new MappingComponent(o));
                }
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.abstract) {
                this.abstract = obj.abstract;
            }
            if (obj.contextType) {
                this.contextType = obj.contextType;
            }
            if (obj.context) {
                this.context = obj.context;
            }
            if (obj.contextInvariant) {
                this.contextInvariant = obj.contextInvariant;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.baseDefinition) {
                this.baseDefinition = obj.baseDefinition;
            }
            if (obj.derivation) {
                this.derivation = obj.derivation;
            }
            if (obj.snapshot) {
                this.snapshot = new SnapshotComponent(obj.snapshot);
            }
            if (obj.differential) {
                this.differential = new DifferentialComponent(obj.differential);
            }
        }
    }
}
exports.StructureDefinition = StructureDefinition;
class ParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.min) {
                this.min = obj.min;
            }
            if (obj.max) {
                this.max = obj.max;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.searchType) {
                this.searchType = obj.searchType;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
            if (obj.binding) {
                this.binding = new ParameterBindingComponent(obj.binding);
            }
            if (obj.part) {
                this.part = [];
                for (let o of obj.part || []) {
                    this.part.push(new ParameterComponent(o));
                }
            }
        }
    }
}
exports.ParameterComponent = ParameterComponent;
class ParameterBindingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.strength) {
                this.strength = obj.strength;
            }
            if (obj.valueSetUri) {
                this.valueSetUri = obj.valueSetUri;
            }
            if (obj.valueSetReference) {
                this.valueSetReference = new ResourceReference(obj.valueSetReference);
            }
        }
    }
    get valueSet() {
        if (this.hasOwnProperty('valueSetUri')) {
            return this.valueSetUri;
        }
        else if (this.hasOwnProperty('valueSetReference')) {
            return this.valueSetReference;
        }
    }
    set valueSet(value) {
        if (typeof value === 'string') {
            this.valueSetUri = value;
            delete this.valueSetReference;
        }
        else if (value instanceof ResourceReference) {
            this.valueSetReference = value;
            delete this.valueSetUri;
        }
    }
}
exports.ParameterBindingComponent = ParameterBindingComponent;
class Parameters extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Parameters';
        if (obj) {
            if (obj.parameter) {
                this.parameter = [];
                for (let o of obj.parameter || []) {
                    this.parameter.push(new ParameterComponent(o));
                }
            }
        }
    }
}
exports.Parameters = Parameters;
class Query extends Parameters {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Query';
        if (obj) {
        }
    }
}
exports.Query = Query;
class LinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.relation) {
                this.relation = obj.relation;
            }
            if (obj.url) {
                this.url = obj.url;
            }
        }
    }
}
exports.LinkComponent = LinkComponent;
class SearchComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.score) {
                this.score = obj.score;
            }
        }
    }
}
exports.SearchComponent = SearchComponent;
class RequestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.method) {
                this.method = obj.method;
            }
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.ifNoneMatch) {
                this.ifNoneMatch = obj.ifNoneMatch;
            }
            if (obj.ifModifiedSince) {
                this.ifModifiedSince = new Date(obj.ifModifiedSince);
            }
            if (obj.ifMatch) {
                this.ifMatch = obj.ifMatch;
            }
            if (obj.ifNoneExist) {
                this.ifNoneExist = obj.ifNoneExist;
            }
        }
    }
}
exports.RequestComponent = RequestComponent;
class ResponseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.location) {
                this.location = obj.location;
            }
            if (obj.etag) {
                this.etag = obj.etag;
            }
            if (obj.lastModified) {
                this.lastModified = new Date(obj.lastModified);
            }
            if (obj.outcome) {
                this.outcome = new DomainResource(obj.outcome);
            }
        }
    }
}
exports.ResponseComponent = ResponseComponent;
class EntryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
            if (obj.fullUrl) {
                this.fullUrl = obj.fullUrl;
            }
            if (obj.resource) {
                this.resource = new DomainResource(obj.resource);
            }
            if (obj.search) {
                this.search = new SearchComponent(obj.search);
            }
            if (obj.request) {
                this.request = new RequestComponent(obj.request);
            }
            if (obj.response) {
                this.response = new ResponseComponent(obj.response);
            }
        }
    }
}
exports.EntryComponent = EntryComponent;
class ResourceEntry extends EntryComponent {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.ResourceEntry = ResourceEntry;
class Flag extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Flag';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.Flag = Flag;
class Alert extends Flag {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Alert';
        if (obj) {
        }
    }
}
exports.Alert = Alert;
class Quantity extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.value) {
                this.value = obj.value;
            }
            if (obj.comparator) {
                this.comparator = obj.comparator;
            }
            if (obj.unit) {
                this.unit = obj.unit;
            }
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.code) {
                this.code = obj.code;
            }
        }
    }
}
exports.Quantity = Quantity;
class SimpleQuantity extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.SimpleQuantity = SimpleQuantity;
class Range extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.low) {
                this.low = new Quantity(obj.low);
            }
            if (obj.high) {
                this.high = new Quantity(obj.high);
            }
        }
    }
}
exports.Range = Range;
class ReferenceRangeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.low) {
                this.low = new SimpleQuantity(obj.low);
            }
            if (obj.high) {
                this.high = new SimpleQuantity(obj.high);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.appliesTo) {
                this.appliesTo = [];
                for (let o of obj.appliesTo || []) {
                    this.appliesTo.push(new CodeableConcept(o));
                }
            }
            if (obj.age) {
                this.age = new Range(obj.age);
            }
            if (obj.text) {
                this.text = obj.text;
            }
        }
    }
}
exports.ReferenceRangeComponent = ReferenceRangeComponent;
class RelatedComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.target) {
                this.target = new ResourceReference(obj.target);
            }
        }
    }
}
exports.RelatedComponent = RelatedComponent;
class ComponentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
            if (obj.dataAbsentReason) {
                this.dataAbsentReason = new CodeableConcept(obj.dataAbsentReason);
            }
            if (obj.interpretation) {
                this.interpretation = new CodeableConcept(obj.interpretation);
            }
            if (obj.referenceRange) {
                this.referenceRange = [];
                for (let o of obj.referenceRange || []) {
                    this.referenceRange.push(new ReferenceRangeComponent(o));
                }
            }
        }
    }
}
exports.ComponentComponent = ComponentComponent;
class Observation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Observation';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.effective) {
                this.effective = new Element(obj.effective);
            }
            if (obj.issued) {
                this.issued = new Date(obj.issued);
            }
            if (obj.performer) {
                this.performer = [];
                for (let o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
            if (obj.dataAbsentReason) {
                this.dataAbsentReason = new CodeableConcept(obj.dataAbsentReason);
            }
            if (obj.interpretation) {
                this.interpretation = new CodeableConcept(obj.interpretation);
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.bodySite) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.specimen) {
                this.specimen = new ResourceReference(obj.specimen);
            }
            if (obj.device) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.referenceRange) {
                this.referenceRange = [];
                for (let o of obj.referenceRange || []) {
                    this.referenceRange.push(new ReferenceRangeComponent(o));
                }
            }
            if (obj.related) {
                this.related = [];
                for (let o of obj.related || []) {
                    this.related.push(new RelatedComponent(o));
                }
            }
            if (obj.component) {
                this.component = [];
                for (let o of obj.component || []) {
                    this.component.push(new ComponentComponent(o));
                }
            }
        }
    }
}
exports.Observation = Observation;
class Binary extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Binary';
        if (obj) {
            if (obj.contentType) {
                this.contentType = obj.contentType;
            }
            if (obj.securityContext) {
                this.securityContext = new ResourceReference(obj.securityContext);
            }
            if (obj.content) {
                this.content = obj.content;
            }
        }
    }
}
exports.Binary = Binary;
class Signature extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new Coding(o));
                }
            }
            if (obj.when) {
                this.when = new Date(obj.when);
            }
            if (obj.who) {
                this.who = new Element(obj.who);
            }
            if (obj.onBehalfOf) {
                this.onBehalfOf = new Element(obj.onBehalfOf);
            }
            if (obj.contentType) {
                this.contentType = obj.contentType;
            }
            if (obj.blob) {
                this.blob = obj.blob;
            }
        }
    }
}
exports.Signature = Signature;
class Bundle extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Bundle';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.total) {
                this.total = obj.total;
            }
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
            if (obj.entry) {
                this.entry = [];
                for (let o of obj.entry || []) {
                    this.entry.push(new EntryComponent(o));
                }
            }
            if (obj.signature) {
                this.signature = new Signature(obj.signature);
            }
        }
    }
}
exports.Bundle = Bundle;
class BundleExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.BundleExtensions = BundleExtensions;
class FilterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.operator) {
                this.operator = obj.operator;
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.FilterComponent = FilterComponent;
class PropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.uri) {
                this.uri = obj.uri;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.type) {
                this.type = obj.type;
            }
        }
    }
}
exports.PropertyComponent = PropertyComponent;
class DesignationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.language) {
                this.language = obj.language;
            }
            if (obj.use) {
                this.use = new Coding(obj.use);
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.DesignationComponent = DesignationComponent;
class ConceptPropertyComponent extends BackboneElement {
    get value() {
        if (this.hasOwnProperty('valueCode')) {
            return this.valueCode;
        }
        if (this.hasOwnProperty('valueCoding')) {
            return this.valueCoding;
        }
        if (this.hasOwnProperty('valueString')) {
            return this.valueString;
        }
        if (this.hasOwnProperty('valueInteger')) {
            return this.valueInteger;
        }
        if (this.hasOwnProperty('valueBoolean')) {
            return this.valueBoolean;
        }
        if (this.hasOwnProperty('valueDateTime')) {
            return this.valueDateTime;
        }
        return;
    }
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.valueCode) {
                this.valueCode = obj.valueCode;
            }
            if (obj.valueCoding) {
                this.valueCoding = new Coding(obj.valueCoding);
            }
            if (obj.valueString) {
                this.valueString = obj.valueString;
            }
            if (obj.hasOwnProperty('valueInteger')) {
                this.valueInteger = obj.valueInteger;
            }
            if (obj.hasOwnProperty('valueBoolean')) {
                this.valueBoolean = obj.valueBoolean;
            }
            if (obj.valueDateTime) {
                this.valueDateTime = obj.valueDateTime;
            }
        }
    }
}
exports.ConceptPropertyComponent = ConceptPropertyComponent;
class ConceptDefinitionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.designation) {
                this.designation = [];
                for (let o of obj.designation || []) {
                    this.designation.push(new DesignationComponent(o));
                }
            }
            if (obj.property) {
                this.property = [];
                for (let o of obj.property || []) {
                    this.property.push(new ConceptPropertyComponent(o));
                }
            }
            if (obj.concept) {
                this.concept = [];
                for (let o of obj.concept || []) {
                    this.concept.push(new ConceptDefinitionComponent(o));
                }
            }
        }
    }
}
exports.ConceptDefinitionComponent = ConceptDefinitionComponent;
class CodeSystem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CodeSystem';
        this.status = 'draft';
        this.content = 'not-present';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.caseSensitive) {
                this.caseSensitive = obj.caseSensitive;
            }
            if (obj.valueSet) {
                this.valueSet = obj.valueSet;
            }
            if (obj.hierarchyMeaning) {
                this.hierarchyMeaning = obj.hierarchyMeaning;
            }
            if (obj.compositional) {
                this.compositional = obj.compositional;
            }
            if (obj.versionNeeded) {
                this.versionNeeded = obj.versionNeeded;
            }
            if (obj.content) {
                this.content = obj.content;
            }
            if (obj.count) {
                this.count = obj.count;
            }
            if (obj.filter) {
                this.filter = [];
                for (let o of obj.filter || []) {
                    this.filter.push(new FilterComponent(o));
                }
            }
            if (obj.property) {
                this.property = [];
                for (let o of obj.property || []) {
                    this.property.push(new PropertyComponent(o));
                }
            }
            if (obj.concept) {
                this.concept = [];
                for (let o of obj.concept || []) {
                    this.concept.push(new ConceptDefinitionComponent(o));
                }
            }
        }
    }
}
exports.CodeSystem = CodeSystem;
class CodeSystemExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.CodeSystemExtensions = CodeSystemExtensions;
class OtherElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.property) {
                this.property = obj.property;
            }
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
        }
    }
}
exports.OtherElementComponent = OtherElementComponent;
class TargetElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.equivalence) {
                this.equivalence = obj.equivalence;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.dependsOn) {
                this.dependsOn = [];
                for (let o of obj.dependsOn || []) {
                    this.dependsOn.push(new OtherElementComponent(o));
                }
            }
            if (obj.product) {
                this.product = [];
                for (let o of obj.product || []) {
                    this.product.push(new OtherElementComponent(o));
                }
            }
        }
    }
}
exports.TargetElementComponent = TargetElementComponent;
class SourceElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.target) {
                this.target = [];
                for (let o of obj.target || []) {
                    this.target.push(new TargetElementComponent(o));
                }
            }
        }
    }
}
exports.SourceElementComponent = SourceElementComponent;
class UnmappedComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.url) {
                this.url = obj.url;
            }
        }
    }
}
exports.UnmappedComponent = UnmappedComponent;
class GroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.source) {
                this.source = obj.source;
            }
            if (obj.sourceVersion) {
                this.sourceVersion = obj.sourceVersion;
            }
            if (obj.target) {
                this.target = obj.target;
            }
            if (obj.targetVersion) {
                this.targetVersion = obj.targetVersion;
            }
            if (obj.element) {
                this.element = [];
                for (let o of obj.element || []) {
                    this.element.push(new SourceElementComponent(o));
                }
            }
            if (obj.unmapped) {
                this.unmapped = new UnmappedComponent(obj.unmapped);
            }
        }
    }
}
exports.GroupComponent = GroupComponent;
class ConceptMap extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ConceptMap';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.source) {
                this.source = new Element(obj.source);
            }
            if (obj.target) {
                this.target = new Element(obj.target);
            }
            if (obj.group) {
                this.group = [];
                for (let o of obj.group || []) {
                    this.group.push(new GroupComponent(o));
                }
            }
        }
    }
}
exports.ConceptMap = ConceptMap;
class ElementDefinitionExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.ElementDefinitionExtensions = ElementDefinitionExtensions;
class Money extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Money = Money;
class CoverageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.coverage) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
        }
    }
}
exports.CoverageComponent = CoverageComponent;
class GuarantorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.party) {
                this.party = new ResourceReference(obj.party);
            }
            if (obj.onHold) {
                this.onHold = obj.onHold;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.GuarantorComponent = GuarantorComponent;
class Account extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Account';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.active) {
                this.active = new Period(obj.active);
            }
            if (obj.balance) {
                this.balance = new Money(obj.balance);
            }
            if (obj.coverage) {
                this.coverage = [];
                for (let o of obj.coverage || []) {
                    this.coverage.push(new CoverageComponent(o));
                }
            }
            if (obj.owner) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.guarantor) {
                this.guarantor = [];
                for (let o of obj.guarantor || []) {
                    this.guarantor.push(new GuarantorComponent(o));
                }
            }
        }
    }
}
exports.Account = Account;
class Contributor extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
        }
    }
}
exports.Contributor = Contributor;
class Attachment extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.contentType) {
                this.contentType = obj.contentType;
            }
            if (obj.language) {
                this.language = obj.language;
            }
            if (obj.data) {
                this.data = obj.data;
            }
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.size) {
                this.size = obj.size;
            }
            if (obj.hash) {
                this.hash = obj.hash;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.creation) {
                this.creation = new Date(obj.creation);
            }
        }
    }
}
exports.Attachment = Attachment;
class RelatedArtifact extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.citation) {
                this.citation = obj.citation;
            }
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.document) {
                this.document = new Attachment(obj.document);
            }
            if (obj.resource) {
                this.resource = new ResourceReference(obj.resource);
            }
        }
    }
}
exports.RelatedArtifact = RelatedArtifact;
class ParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
        }
    }
}
exports.ParticipantComponent = ParticipantComponent;
class RepeatComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.bounds) {
                this.bounds = new Element(obj.bounds);
            }
            if (obj.count) {
                this.count = obj.count;
            }
            if (obj.countMax) {
                this.countMax = obj.countMax;
            }
            if (obj.duration) {
                this.duration = obj.duration;
            }
            if (obj.durationMax) {
                this.durationMax = obj.durationMax;
            }
            if (obj.durationUnit) {
                this.durationUnit = obj.durationUnit;
            }
            if (obj.frequency) {
                this.frequency = obj.frequency;
            }
            if (obj.frequencyMax) {
                this.frequencyMax = obj.frequencyMax;
            }
            if (obj.period) {
                this.period = obj.period;
            }
            if (obj.periodMax) {
                this.periodMax = obj.periodMax;
            }
            if (obj.periodUnit) {
                this.periodUnit = obj.periodUnit;
            }
            if (obj.dayOfWeek) {
                this.dayOfWeek = obj.dayOfWeek;
            }
            if (obj.timeOfDay) {
                this.timeOfDay = obj.timeOfDay;
            }
            if (obj.when) {
                this.when = obj.when;
            }
            if (obj.offset) {
                this.offset = obj.offset;
            }
        }
    }
}
exports.RepeatComponent = RepeatComponent;
class Timing extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.event) {
                this.event = obj.event;
            }
            if (obj.repeat) {
                this.repeat = new RepeatComponent(obj.repeat);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.Timing = Timing;
class Ratio extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.numerator) {
                this.numerator = new Quantity(obj.numerator);
            }
            if (obj.denominator) {
                this.denominator = new Quantity(obj.denominator);
            }
        }
    }
}
exports.Ratio = Ratio;
class Dosage extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.additionalInstruction) {
                this.additionalInstruction = [];
                for (let o of obj.additionalInstruction || []) {
                    this.additionalInstruction.push(new CodeableConcept(o));
                }
            }
            if (obj.patientInstruction) {
                this.patientInstruction = obj.patientInstruction;
            }
            if (obj.timing) {
                this.timing = new Timing(obj.timing);
            }
            if (obj.asNeeded) {
                this.asNeeded = new Element(obj.asNeeded);
            }
            if (obj.site) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.route) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.dose) {
                this.dose = new Element(obj.dose);
            }
            if (obj.maxDosePerPeriod) {
                this.maxDosePerPeriod = new Ratio(obj.maxDosePerPeriod);
            }
            if (obj.maxDosePerAdministration) {
                this.maxDosePerAdministration = new Quantity(obj.maxDosePerAdministration);
            }
            if (obj.maxDosePerLifetime) {
                this.maxDosePerLifetime = new Quantity(obj.maxDosePerLifetime);
            }
            if (obj.rate) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.Dosage = Dosage;
class DynamicValueComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.language) {
                this.language = obj.language;
            }
            if (obj.expression) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.DynamicValueComponent = DynamicValueComponent;
class ActivityDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ActivityDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.contributor) {
                this.contributor = [];
                for (let o of obj.contributor || []) {
                    this.contributor.push(new Contributor(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.library) {
                this.library = [];
                for (let o of obj.library || []) {
                    this.library.push(new ResourceReference(o));
                }
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.timing) {
                this.timing = new Element(obj.timing);
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.product) {
                this.product = new Element(obj.product);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.dosage) {
                this.dosage = [];
                for (let o of obj.dosage || []) {
                    this.dosage.push(new Dosage(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = [];
                for (let o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.transform) {
                this.transform = new ResourceReference(obj.transform);
            }
            if (obj.dynamicValue) {
                this.dynamicValue = [];
                for (let o of obj.dynamicValue || []) {
                    this.dynamicValue.push(new DynamicValueComponent(o));
                }
            }
        }
    }
}
exports.ActivityDefinition = ActivityDefinition;
class Address extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.line) {
                this.line = obj.line;
            }
            if (obj.city) {
                this.city = obj.city;
            }
            if (obj.district) {
                this.district = obj.district;
            }
            if (obj.state) {
                this.state = obj.state;
            }
            if (obj.postalCode) {
                this.postalCode = obj.postalCode;
            }
            if (obj.country) {
                this.country = obj.country;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.Address = Address;
class SuspectEntityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.instance) {
                this.instance = new ResourceReference(obj.instance);
            }
            if (obj.causality) {
                this.causality = obj.causality;
            }
            if (obj.causalityAssessment) {
                this.causalityAssessment = new CodeableConcept(obj.causalityAssessment);
            }
            if (obj.causalityProductRelatedness) {
                this.causalityProductRelatedness = obj.causalityProductRelatedness;
            }
            if (obj.causalityMethod) {
                this.causalityMethod = new CodeableConcept(obj.causalityMethod);
            }
            if (obj.causalityAuthor) {
                this.causalityAuthor = new ResourceReference(obj.causalityAuthor);
            }
            if (obj.causalityResult) {
                this.causalityResult = new CodeableConcept(obj.causalityResult);
            }
        }
    }
}
exports.SuspectEntityComponent = SuspectEntityComponent;
class AdverseEvent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AdverseEvent';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.category) {
                this.category = obj.category;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.reaction) {
                this.reaction = [];
                for (let o of obj.reaction || []) {
                    this.reaction.push(new ResourceReference(o));
                }
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.seriousness) {
                this.seriousness = new CodeableConcept(obj.seriousness);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.recorder) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.eventParticipant) {
                this.eventParticipant = new ResourceReference(obj.eventParticipant);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.suspectEntity) {
                this.suspectEntity = [];
                for (let o of obj.suspectEntity || []) {
                    this.suspectEntity.push(new SuspectEntityComponent(o));
                }
            }
            if (obj.subjectMedicalHistory) {
                this.subjectMedicalHistory = [];
                for (let o of obj.subjectMedicalHistory || []) {
                    this.subjectMedicalHistory.push(new ResourceReference(o));
                }
            }
            if (obj.referenceDocument) {
                this.referenceDocument = [];
                for (let o of obj.referenceDocument || []) {
                    this.referenceDocument.push(new ResourceReference(o));
                }
            }
            if (obj.study) {
                this.study = [];
                for (let o of obj.study || []) {
                    this.study.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.AdverseEvent = AdverseEvent;
class Age extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Age = Age;
class Annotation extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.author) {
                this.author = new Element(obj.author);
            }
            if (obj.time) {
                this.time = new Date(obj.time);
            }
            if (obj.text) {
                this.text = obj.text;
            }
        }
    }
}
exports.Annotation = Annotation;
class ReactionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.substance) {
                this.substance = new CodeableConcept(obj.substance);
            }
            if (obj.manifestation) {
                this.manifestation = [];
                for (let o of obj.manifestation || []) {
                    this.manifestation.push(new CodeableConcept(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.onset) {
                this.onset = new Date(obj.onset);
            }
            if (obj.severity) {
                this.severity = obj.severity;
            }
            if (obj.exposureRoute) {
                this.exposureRoute = new CodeableConcept(obj.exposureRoute);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.ReactionComponent = ReactionComponent;
class AllergyIntolerance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AllergyIntolerance';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.clinicalStatus) {
                this.clinicalStatus = obj.clinicalStatus;
            }
            if (obj.verificationStatus) {
                this.verificationStatus = obj.verificationStatus;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.category) {
                this.category = obj.category;
            }
            if (obj.criticality) {
                this.criticality = obj.criticality;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.onset) {
                this.onset = new Element(obj.onset);
            }
            if (obj.assertedDate) {
                this.assertedDate = new Date(obj.assertedDate);
            }
            if (obj.recorder) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.asserter) {
                this.asserter = new ResourceReference(obj.asserter);
            }
            if (obj.lastOccurrence) {
                this.lastOccurrence = new Date(obj.lastOccurrence);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.reaction) {
                this.reaction = [];
                for (let o of obj.reaction || []) {
                    this.reaction.push(new ReactionComponent(o));
                }
            }
        }
    }
}
exports.AllergyIntolerance = AllergyIntolerance;
class Appointment extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Appointment';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.serviceCategory) {
                this.serviceCategory = new CodeableConcept(obj.serviceCategory);
            }
            if (obj.serviceType) {
                this.serviceType = [];
                for (let o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.specialty) {
                this.specialty = [];
                for (let o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.appointmentType) {
                this.appointmentType = new CodeableConcept(obj.appointmentType);
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.indication) {
                this.indication = [];
                for (let o of obj.indication || []) {
                    this.indication.push(new ResourceReference(o));
                }
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.supportingInformation) {
                this.supportingInformation = [];
                for (let o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.start) {
                this.start = new Date(obj.start);
            }
            if (obj.end) {
                this.end = new Date(obj.end);
            }
            if (obj.minutesDuration) {
                this.minutesDuration = obj.minutesDuration;
            }
            if (obj.slot) {
                this.slot = [];
                for (let o of obj.slot || []) {
                    this.slot.push(new ResourceReference(o));
                }
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.incomingReferral) {
                this.incomingReferral = [];
                for (let o of obj.incomingReferral || []) {
                    this.incomingReferral.push(new ResourceReference(o));
                }
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.requestedPeriod) {
                this.requestedPeriod = [];
                for (let o of obj.requestedPeriod || []) {
                    this.requestedPeriod.push(new Period(o));
                }
            }
        }
    }
}
exports.Appointment = Appointment;
class AppointmentResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AppointmentResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.appointment) {
                this.appointment = new ResourceReference(obj.appointment);
            }
            if (obj.start) {
                this.start = new Date(obj.start);
            }
            if (obj.end) {
                this.end = new Date(obj.end);
            }
            if (obj.participantType) {
                this.participantType = [];
                for (let o of obj.participantType || []) {
                    this.participantType.push(new CodeableConcept(o));
                }
            }
            if (obj.actor) {
                this.actor = new ResourceReference(obj.actor);
            }
            if (obj.participantStatus) {
                this.participantStatus = obj.participantStatus;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.AppointmentResponse = AppointmentResponse;
class NetworkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.address) {
                this.address = obj.address;
            }
            if (obj.type) {
                this.type = obj.type;
            }
        }
    }
}
exports.NetworkComponent = NetworkComponent;
class AgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.role) {
                this.role = [];
                for (let o of obj.role || []) {
                    this.role.push(new CodeableConcept(o));
                }
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.userId) {
                this.userId = new Identifier(obj.userId);
            }
            if (obj.altId) {
                this.altId = obj.altId;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.requestor) {
                this.requestor = obj.requestor;
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.policy) {
                this.policy = obj.policy;
            }
            if (obj.media) {
                this.media = new Coding(obj.media);
            }
            if (obj.network) {
                this.network = new NetworkComponent(obj.network);
            }
            if (obj.purposeOfUse) {
                this.purposeOfUse = [];
                for (let o of obj.purposeOfUse || []) {
                    this.purposeOfUse.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.AgentComponent = AgentComponent;
class SourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.site) {
                this.site = obj.site;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new Coding(o));
                }
            }
        }
    }
}
exports.SourceComponent = SourceComponent;
class DetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.DetailComponent = DetailComponent;
class EntityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.type) {
                this.type = new Coding(obj.type);
            }
            if (obj.role) {
                this.role = new Coding(obj.role);
            }
            if (obj.lifecycle) {
                this.lifecycle = new Coding(obj.lifecycle);
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.query) {
                this.query = obj.query;
            }
            if (obj.detail) {
                this.detail = [];
                for (let o of obj.detail || []) {
                    this.detail.push(new DetailComponent(o));
                }
            }
        }
    }
}
exports.EntityComponent = EntityComponent;
class AuditEvent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AuditEvent';
        if (obj) {
            if (obj.type) {
                this.type = new Coding(obj.type);
            }
            if (obj.subtype) {
                this.subtype = [];
                for (let o of obj.subtype || []) {
                    this.subtype.push(new Coding(o));
                }
            }
            if (obj.action) {
                this.action = obj.action;
            }
            if (obj.recorded) {
                this.recorded = new Date(obj.recorded);
            }
            if (obj.outcome) {
                this.outcome = obj.outcome;
            }
            if (obj.outcomeDesc) {
                this.outcomeDesc = obj.outcomeDesc;
            }
            if (obj.purposeOfEvent) {
                this.purposeOfEvent = [];
                for (let o of obj.purposeOfEvent || []) {
                    this.purposeOfEvent.push(new CodeableConcept(o));
                }
            }
            if (obj.agent) {
                this.agent = [];
                for (let o of obj.agent || []) {
                    this.agent.push(new AgentComponent(o));
                }
            }
            if (obj.source) {
                this.source = new SourceComponent(obj.source);
            }
            if (obj.entity) {
                this.entity = [];
                for (let o of obj.entity || []) {
                    this.entity.push(new EntityComponent(o));
                }
            }
        }
    }
}
exports.AuditEvent = AuditEvent;
class Basic extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Basic';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.Basic = Basic;
class BodySite extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'BodySite';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.qualifier) {
                this.qualifier = [];
                for (let o of obj.qualifier || []) {
                    this.qualifier.push(new CodeableConcept(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.image) {
                this.image = [];
                for (let o of obj.image || []) {
                    this.image.push(new Attachment(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
        }
    }
}
exports.BodySite = BodySite;
class SoftwareComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.releaseDate) {
                this.releaseDate = new Date(obj.releaseDate);
            }
        }
    }
}
exports.SoftwareComponent = SoftwareComponent;
class ImplementationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.url) {
                this.url = obj.url;
            }
        }
    }
}
exports.ImplementationComponent = ImplementationComponent;
class CertificateComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.blob) {
                this.blob = obj.blob;
            }
        }
    }
}
exports.CertificateComponent = CertificateComponent;
class SecurityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.cors) {
                this.cors = obj.cors;
            }
            if (obj.service) {
                this.service = [];
                for (let o of obj.service || []) {
                    this.service.push(new CodeableConcept(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.certificate) {
                this.certificate = [];
                for (let o of obj.certificate || []) {
                    this.certificate.push(new CertificateComponent(o));
                }
            }
        }
    }
}
exports.SecurityComponent = SecurityComponent;
class ResourceInteractionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.ResourceInteractionComponent = ResourceInteractionComponent;
class SearchParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.SearchParamComponent = SearchParamComponent;
class PackageResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        this.example = false;
        if (obj) {
            if (obj.hasOwnProperty('example')) {
                this.example = obj.example;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.acronym) {
                this.acronym = obj.acronym;
            }
            if (obj.sourceUri) {
                this.sourceUri = obj.sourceUri;
            }
            if (obj.sourceReference) {
                this.sourceReference = new ResourceReference(obj.sourceReference);
            }
            if (obj.exampleFor) {
                this.exampleFor = new ResourceReference(obj.exampleFor);
            }
        }
    }
}
exports.PackageResourceComponent = PackageResourceComponent;
class ResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.interaction) {
                this.interaction = [];
                for (let o of obj.interaction || []) {
                    this.interaction.push(new ResourceInteractionComponent(o));
                }
            }
            if (obj.versioning) {
                this.versioning = obj.versioning;
            }
            if (obj.readHistory) {
                this.readHistory = obj.readHistory;
            }
            if (obj.updateCreate) {
                this.updateCreate = obj.updateCreate;
            }
            if (obj.conditionalCreate) {
                this.conditionalCreate = obj.conditionalCreate;
            }
            if (obj.conditionalRead) {
                this.conditionalRead = obj.conditionalRead;
            }
            if (obj.conditionalUpdate) {
                this.conditionalUpdate = obj.conditionalUpdate;
            }
            if (obj.conditionalDelete) {
                this.conditionalDelete = obj.conditionalDelete;
            }
            if (obj.referencePolicy) {
                this.referencePolicy = obj.referencePolicy;
            }
            if (obj.searchInclude) {
                this.searchInclude = obj.searchInclude;
            }
            if (obj.searchRevInclude) {
                this.searchRevInclude = obj.searchRevInclude;
            }
            if (obj.searchParam) {
                this.searchParam = [];
                for (let o of obj.searchParam || []) {
                    this.searchParam.push(new SearchParamComponent(o));
                }
            }
        }
    }
}
exports.ResourceComponent = ResourceComponent;
class SystemInteractionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.SystemInteractionComponent = SystemInteractionComponent;
class OperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.definition) {
                this.definition = new ResourceReference(obj.definition);
            }
        }
    }
}
exports.OperationComponent = OperationComponent;
class RestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.security) {
                this.security = new SecurityComponent(obj.security);
            }
            if (obj.resource) {
                this.resource = [];
                for (let o of obj.resource || []) {
                    this.resource.push(new ResourceComponent(o));
                }
            }
            if (obj.interaction) {
                this.interaction = [];
                for (let o of obj.interaction || []) {
                    this.interaction.push(new SystemInteractionComponent(o));
                }
            }
            if (obj.searchParam) {
                this.searchParam = [];
                for (let o of obj.searchParam || []) {
                    this.searchParam.push(new SearchParamComponent(o));
                }
            }
            if (obj.operation) {
                this.operation = [];
                for (let o of obj.operation || []) {
                    this.operation.push(new OperationComponent(o));
                }
            }
            if (obj.compartment) {
                this.compartment = obj.compartment;
            }
        }
    }
}
exports.RestComponent = RestComponent;
class EndpointComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.protocol) {
                this.protocol = new Coding(obj.protocol);
            }
            if (obj.address) {
                this.address = obj.address;
            }
        }
    }
}
exports.EndpointComponent = EndpointComponent;
class SupportedMessageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.definition) {
                this.definition = new ResourceReference(obj.definition);
            }
        }
    }
}
exports.SupportedMessageComponent = SupportedMessageComponent;
class EventComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new Coding(obj.code);
            }
            if (obj.category) {
                this.category = obj.category;
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.focus) {
                this.focus = obj.focus;
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.response) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.EventComponent = EventComponent;
class MessagingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new EndpointComponent(o));
                }
            }
            if (obj.reliableCache) {
                this.reliableCache = obj.reliableCache;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.supportedMessage) {
                this.supportedMessage = [];
                for (let o of obj.supportedMessage || []) {
                    this.supportedMessage.push(new SupportedMessageComponent(o));
                }
            }
            if (obj.event) {
                this.event = [];
                for (let o of obj.event || []) {
                    this.event.push(new EventComponent(o));
                }
            }
        }
    }
}
exports.MessagingComponent = MessagingComponent;
class DocumentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
        }
    }
}
exports.DocumentComponent = DocumentComponent;
class CapabilityStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CapabilityStatement';
        this.status = 'draft';
        this.date = new Date().formatFhir();
        this.kind = 'instance';
        this.fhirVersion = '3.0.1';
        this.acceptUnknown = 'no';
        this.format = ['application/json'];
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = obj.date;
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.instantiates) {
                this.instantiates = obj.instantiates;
            }
            if (obj.software) {
                this.software = new SoftwareComponent(obj.software);
            }
            if (obj.implementation) {
                this.implementation = new ImplementationComponent(obj.implementation);
            }
            if (obj.fhirVersion) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.acceptUnknown) {
                this.acceptUnknown = obj.acceptUnknown;
            }
            if (obj.format) {
                this.format = obj.format;
            }
            if (obj.patchFormat) {
                this.patchFormat = obj.patchFormat;
            }
            if (obj.implementationGuide) {
                this.implementationGuide = obj.implementationGuide;
            }
            if (obj.profile) {
                this.profile = [];
                for (let o of obj.profile || []) {
                    this.profile.push(new ResourceReference(o));
                }
            }
            if (obj.rest) {
                this.rest = [];
                for (let o of obj.rest || []) {
                    this.rest.push(new RestComponent(o));
                }
            }
            if (obj.messaging) {
                this.messaging = [];
                for (let o of obj.messaging || []) {
                    this.messaging.push(new MessagingComponent(o));
                }
            }
            if (obj.document) {
                this.document = [];
                for (let o of obj.document || []) {
                    this.document.push(new DocumentComponent(o));
                }
            }
        }
    }
}
exports.CapabilityStatement = CapabilityStatement;
class ActivityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.outcomeCodeableConcept) {
                this.outcomeCodeableConcept = [];
                for (let o of obj.outcomeCodeableConcept || []) {
                    this.outcomeCodeableConcept.push(new CodeableConcept(o));
                }
            }
            if (obj.outcomeReference) {
                this.outcomeReference = [];
                for (let o of obj.outcomeReference || []) {
                    this.outcomeReference.push(new ResourceReference(o));
                }
            }
            if (obj.progress) {
                this.progress = [];
                for (let o of obj.progress || []) {
                    this.progress.push(new Annotation(o));
                }
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.detail) {
                this.detail = new DetailComponent(obj.detail);
            }
        }
    }
}
exports.ActivityComponent = ActivityComponent;
class CarePlan extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CarePlan';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.author) {
                this.author = [];
                for (let o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.careTeam) {
                this.careTeam = [];
                for (let o of obj.careTeam || []) {
                    this.careTeam.push(new ResourceReference(o));
                }
            }
            if (obj.addresses) {
                this.addresses = [];
                for (let o of obj.addresses || []) {
                    this.addresses.push(new ResourceReference(o));
                }
            }
            if (obj.supportingInfo) {
                this.supportingInfo = [];
                for (let o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.goal) {
                this.goal = [];
                for (let o of obj.goal || []) {
                    this.goal.push(new ResourceReference(o));
                }
            }
            if (obj.activity) {
                this.activity = [];
                for (let o of obj.activity || []) {
                    this.activity.push(new ActivityComponent(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CarePlan = CarePlan;
class CareTeam extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CareTeam';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.managingOrganization) {
                this.managingOrganization = [];
                for (let o of obj.managingOrganization || []) {
                    this.managingOrganization.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CareTeam = CareTeam;
class ChargeItem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ChargeItem';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.performingOrganization) {
                this.performingOrganization = new ResourceReference(obj.performingOrganization);
            }
            if (obj.requestingOrganization) {
                this.requestingOrganization = new ResourceReference(obj.requestingOrganization);
            }
            if (obj.quantity) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.bodysite) {
                this.bodysite = [];
                for (let o of obj.bodysite || []) {
                    this.bodysite.push(new CodeableConcept(o));
                }
            }
            if (obj.factorOverride) {
                this.factorOverride = obj.factorOverride;
            }
            if (obj.priceOverride) {
                this.priceOverride = new Money(obj.priceOverride);
            }
            if (obj.overrideReason) {
                this.overrideReason = obj.overrideReason;
            }
            if (obj.enterer) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.enteredDate) {
                this.enteredDate = new Date(obj.enteredDate);
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.service) {
                this.service = [];
                for (let o of obj.service || []) {
                    this.service.push(new ResourceReference(o));
                }
            }
            if (obj.account) {
                this.account = [];
                for (let o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.supportingInformation) {
                this.supportingInformation = [];
                for (let o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ChargeItem = ChargeItem;
class RelatedClaimComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.claim) {
                this.claim = new ResourceReference(obj.claim);
            }
            if (obj.relationship) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.reference) {
                this.reference = new Identifier(obj.reference);
            }
        }
    }
}
exports.RelatedClaimComponent = RelatedClaimComponent;
class PayeeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.resourceType) {
                this.resourceType = new Coding(obj.resourceType);
            }
            if (obj.party) {
                this.party = new ResourceReference(obj.party);
            }
        }
    }
}
exports.PayeeComponent = PayeeComponent;
class CareTeamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.responsible) {
                this.responsible = obj.responsible;
            }
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.qualification) {
                this.qualification = new CodeableConcept(obj.qualification);
            }
        }
    }
}
exports.CareTeamComponent = CareTeamComponent;
class SpecialConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.timing) {
                this.timing = new Element(obj.timing);
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
            if (obj.reason) {
                this.reason = new CodeableConcept(obj.reason);
            }
        }
    }
}
exports.SpecialConditionComponent = SpecialConditionComponent;
class DiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.diagnosis) {
                this.diagnosis = new Element(obj.diagnosis);
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.packageCode) {
                this.packageCode = new CodeableConcept(obj.packageCode);
            }
        }
    }
}
exports.DiagnosisComponent = DiagnosisComponent;
class ProcedureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.procedure) {
                this.procedure = new Element(obj.procedure);
            }
        }
    }
}
exports.ProcedureComponent = ProcedureComponent;
class InsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.focal) {
                this.focal = obj.focal;
            }
            if (obj.coverage) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.businessArrangement) {
                this.businessArrangement = obj.businessArrangement;
            }
            if (obj.preAuthRef) {
                this.preAuthRef = obj.preAuthRef;
            }
            if (obj.claimResponse) {
                this.claimResponse = new ResourceReference(obj.claimResponse);
            }
        }
    }
}
exports.InsuranceComponent = InsuranceComponent;
class AccidentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.location) {
                this.location = new Element(obj.location);
            }
        }
    }
}
exports.AccidentComponent = AccidentComponent;
class ItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.careTeamLinkId) {
                this.careTeamLinkId = obj.careTeamLinkId;
            }
            if (obj.diagnosisLinkId) {
                this.diagnosisLinkId = obj.diagnosisLinkId;
            }
            if (obj.procedureLinkId) {
                this.procedureLinkId = obj.procedureLinkId;
            }
            if (obj.informationLinkId) {
                this.informationLinkId = obj.informationLinkId;
            }
            if (obj.revenue) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.service) {
                this.service = new CodeableConcept(obj.service);
            }
            if (obj.modifier) {
                this.modifier = [];
                for (let o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.programCode) {
                this.programCode = [];
                for (let o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.serviced) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.location) {
                this.location = new Element(obj.location);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.unitPrice) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.factor) {
                this.factor = obj.factor;
            }
            if (obj.net) {
                this.net = new Money(obj.net);
            }
            if (obj.udi) {
                this.udi = [];
                for (let o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.subSite) {
                this.subSite = [];
                for (let o of obj.subSite || []) {
                    this.subSite.push(new CodeableConcept(o));
                }
            }
            if (obj.encounter) {
                this.encounter = [];
                for (let o of obj.encounter || []) {
                    this.encounter.push(new ResourceReference(o));
                }
            }
            if (obj.detail) {
                this.detail = [];
                for (let o of obj.detail || []) {
                    this.detail.push(new DetailComponent(o));
                }
            }
        }
    }
}
exports.ItemComponent = ItemComponent;
class Claim extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Claim';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subType) {
                this.subType = [];
                for (let o of obj.subType || []) {
                    this.subType.push(new CodeableConcept(o));
                }
            }
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.billablePeriod) {
                this.billablePeriod = new Period(obj.billablePeriod);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.enterer) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.priority) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.fundsReserve) {
                this.fundsReserve = new CodeableConcept(obj.fundsReserve);
            }
            if (obj.related) {
                this.related = [];
                for (let o of obj.related || []) {
                    this.related.push(new RelatedClaimComponent(o));
                }
            }
            if (obj.prescription) {
                this.prescription = new ResourceReference(obj.prescription);
            }
            if (obj.originalPrescription) {
                this.originalPrescription = new ResourceReference(obj.originalPrescription);
            }
            if (obj.payee) {
                this.payee = new PayeeComponent(obj.payee);
            }
            if (obj.referral) {
                this.referral = new ResourceReference(obj.referral);
            }
            if (obj.facility) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.careTeam) {
                this.careTeam = [];
                for (let o of obj.careTeam || []) {
                    this.careTeam.push(new CareTeamComponent(o));
                }
            }
            if (obj.information) {
                this.information = [];
                for (let o of obj.information || []) {
                    this.information.push(new SpecialConditionComponent(o));
                }
            }
            if (obj.diagnosis) {
                this.diagnosis = [];
                for (let o of obj.diagnosis || []) {
                    this.diagnosis.push(new DiagnosisComponent(o));
                }
            }
            if (obj.procedure) {
                this.procedure = [];
                for (let o of obj.procedure || []) {
                    this.procedure.push(new ProcedureComponent(o));
                }
            }
            if (obj.insurance) {
                this.insurance = [];
                for (let o of obj.insurance || []) {
                    this.insurance.push(new InsuranceComponent(o));
                }
            }
            if (obj.accident) {
                this.accident = new AccidentComponent(obj.accident);
            }
            if (obj.employmentImpacted) {
                this.employmentImpacted = new Period(obj.employmentImpacted);
            }
            if (obj.hospitalization) {
                this.hospitalization = new Period(obj.hospitalization);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemComponent(o));
                }
            }
            if (obj.total) {
                this.total = new Money(obj.total);
            }
        }
    }
}
exports.Claim = Claim;
class AdjudicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.reason) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.amount) {
                this.amount = new Money(obj.amount);
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.AdjudicationComponent = AdjudicationComponent;
class AddedItemsDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.revenue) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.service) {
                this.service = new CodeableConcept(obj.service);
            }
            if (obj.modifier) {
                this.modifier = [];
                for (let o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.fee) {
                this.fee = new Money(obj.fee);
            }
            if (obj.noteNumber) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.adjudication) {
                this.adjudication = [];
                for (let o of obj.adjudication || []) {
                    this.adjudication.push(new AdjudicationComponent(o));
                }
            }
        }
    }
}
exports.AddedItemsDetailComponent = AddedItemsDetailComponent;
class AddedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequenceLinkId) {
                this.sequenceLinkId = obj.sequenceLinkId;
            }
            if (obj.revenue) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.service) {
                this.service = new CodeableConcept(obj.service);
            }
            if (obj.modifier) {
                this.modifier = [];
                for (let o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.fee) {
                this.fee = new Money(obj.fee);
            }
            if (obj.noteNumber) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.adjudication) {
                this.adjudication = [];
                for (let o of obj.adjudication || []) {
                    this.adjudication.push(new AdjudicationComponent(o));
                }
            }
            if (obj.detail) {
                this.detail = [];
                for (let o of obj.detail || []) {
                    this.detail.push(new AddedItemsDetailComponent(o));
                }
            }
        }
    }
}
exports.AddedItemComponent = AddedItemComponent;
class ErrorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequenceLinkId) {
                this.sequenceLinkId = obj.sequenceLinkId;
            }
            if (obj.detailSequenceLinkId) {
                this.detailSequenceLinkId = obj.detailSequenceLinkId;
            }
            if (obj.subdetailSequenceLinkId) {
                this.subdetailSequenceLinkId = obj.subdetailSequenceLinkId;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.ErrorComponent = ErrorComponent;
class PaymentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.adjustment) {
                this.adjustment = new Money(obj.adjustment);
            }
            if (obj.adjustmentReason) {
                this.adjustmentReason = new CodeableConcept(obj.adjustmentReason);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.amount) {
                this.amount = new Money(obj.amount);
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
        }
    }
}
exports.PaymentComponent = PaymentComponent;
class NoteComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.number) {
                this.number = obj.number;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.language) {
                this.language = new CodeableConcept(obj.language);
            }
        }
    }
}
exports.NoteComponent = NoteComponent;
class ClaimResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ClaimResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.requestProvider) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.requestOrganization) {
                this.requestOrganization = new ResourceReference(obj.requestOrganization);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.payeeType) {
                this.payeeType = new CodeableConcept(obj.payeeType);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemComponent(o));
                }
            }
            if (obj.addItem) {
                this.addItem = [];
                for (let o of obj.addItem || []) {
                    this.addItem.push(new AddedItemComponent(o));
                }
            }
            if (obj.error) {
                this.error = [];
                for (let o of obj.error || []) {
                    this.error.push(new ErrorComponent(o));
                }
            }
            if (obj.totalCost) {
                this.totalCost = new Money(obj.totalCost);
            }
            if (obj.unallocDeductable) {
                this.unallocDeductable = new Money(obj.unallocDeductable);
            }
            if (obj.totalBenefit) {
                this.totalBenefit = new Money(obj.totalBenefit);
            }
            if (obj.payment) {
                this.payment = new PaymentComponent(obj.payment);
            }
            if (obj.reserved) {
                this.reserved = new Coding(obj.reserved);
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.processNote) {
                this.processNote = [];
                for (let o of obj.processNote || []) {
                    this.processNote.push(new NoteComponent(o));
                }
            }
            if (obj.communicationRequest) {
                this.communicationRequest = [];
                for (let o of obj.communicationRequest || []) {
                    this.communicationRequest.push(new ResourceReference(o));
                }
            }
            if (obj.insurance) {
                this.insurance = [];
                for (let o of obj.insurance || []) {
                    this.insurance.push(new InsuranceComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponse = ClaimResponse;
class InvestigationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.InvestigationComponent = InvestigationComponent;
class FindingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.item) {
                this.item = new Element(obj.item);
            }
            if (obj.basis) {
                this.basis = obj.basis;
            }
        }
    }
}
exports.FindingComponent = FindingComponent;
class ClinicalImpression extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ClinicalImpression';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.effective) {
                this.effective = new Element(obj.effective);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.assessor) {
                this.assessor = new ResourceReference(obj.assessor);
            }
            if (obj.previous) {
                this.previous = new ResourceReference(obj.previous);
            }
            if (obj.problem) {
                this.problem = [];
                for (let o of obj.problem || []) {
                    this.problem.push(new ResourceReference(o));
                }
            }
            if (obj.investigation) {
                this.investigation = [];
                for (let o of obj.investigation || []) {
                    this.investigation.push(new InvestigationComponent(o));
                }
            }
            if (obj.protocol) {
                this.protocol = obj.protocol;
            }
            if (obj.summary) {
                this.summary = obj.summary;
            }
            if (obj.finding) {
                this.finding = [];
                for (let o of obj.finding || []) {
                    this.finding.push(new FindingComponent(o));
                }
            }
            if (obj.prognosisCodeableConcept) {
                this.prognosisCodeableConcept = [];
                for (let o of obj.prognosisCodeableConcept || []) {
                    this.prognosisCodeableConcept.push(new CodeableConcept(o));
                }
            }
            if (obj.prognosisReference) {
                this.prognosisReference = [];
                for (let o of obj.prognosisReference || []) {
                    this.prognosisReference.push(new ResourceReference(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.ClinicalImpression = ClinicalImpression;
class PayloadComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.content) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.PayloadComponent = PayloadComponent;
class Communication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Communication';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.notDone) {
                this.notDone = obj.notDone;
            }
            if (obj.notDoneReason) {
                this.notDoneReason = new CodeableConcept(obj.notDoneReason);
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.medium) {
                this.medium = [];
                for (let o of obj.medium || []) {
                    this.medium.push(new CodeableConcept(o));
                }
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.recipient) {
                this.recipient = [];
                for (let o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new ResourceReference(o));
                }
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.sent) {
                this.sent = new Date(obj.sent);
            }
            if (obj.received) {
                this.received = new Date(obj.received);
            }
            if (obj.sender) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.payload) {
                this.payload = [];
                for (let o of obj.payload || []) {
                    this.payload.push(new PayloadComponent(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Communication = Communication;
class RequesterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.agent) {
                this.agent = new ResourceReference(obj.agent);
            }
            if (obj.onBehalfOf) {
                this.onBehalfOf = new ResourceReference(obj.onBehalfOf);
            }
        }
    }
}
exports.RequesterComponent = RequesterComponent;
class CommunicationRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CommunicationRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.medium) {
                this.medium = [];
                for (let o of obj.medium || []) {
                    this.medium.push(new CodeableConcept(o));
                }
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.recipient) {
                this.recipient = [];
                for (let o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new ResourceReference(o));
                }
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.payload) {
                this.payload = [];
                for (let o of obj.payload || []) {
                    this.payload.push(new PayloadComponent(o));
                }
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.sender) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CommunicationRequest = CommunicationRequest;
class CompartmentDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CompartmentDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.search) {
                this.search = obj.search;
            }
            if (obj.resource) {
                this.resource = [];
                for (let o of obj.resource || []) {
                    this.resource.push(new ResourceComponent(o));
                }
            }
        }
    }
}
exports.CompartmentDefinition = CompartmentDefinition;
class AttesterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.time) {
                this.time = new Date(obj.time);
            }
            if (obj.party) {
                this.party = new ResourceReference(obj.party);
            }
        }
    }
}
exports.AttesterComponent = AttesterComponent;
class RelatesToComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.target) {
                this.target = new Element(obj.target);
            }
        }
    }
}
exports.RelatesToComponent = RelatesToComponent;
class SectionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.text) {
                this.text = new Narrative(obj.text);
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.orderedBy) {
                this.orderedBy = new CodeableConcept(obj.orderedBy);
            }
            if (obj.entry) {
                this.entry = [];
                for (let o of obj.entry || []) {
                    this.entry.push(new ResourceReference(o));
                }
            }
            if (obj.emptyReason) {
                this.emptyReason = new CodeableConcept(obj.emptyReason);
            }
            if (obj.section) {
                this.section = [];
                for (let o of obj.section || []) {
                    this.section.push(new SectionComponent(o));
                }
            }
        }
    }
}
exports.SectionComponent = SectionComponent;
class Composition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Composition';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.class) {
                this.class = new CodeableConcept(obj.class);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.author) {
                this.author = [];
                for (let o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.confidentiality) {
                this.confidentiality = obj.confidentiality;
            }
            if (obj.attester) {
                this.attester = [];
                for (let o of obj.attester || []) {
                    this.attester.push(new AttesterComponent(o));
                }
            }
            if (obj.custodian) {
                this.custodian = new ResourceReference(obj.custodian);
            }
            if (obj.relatesTo) {
                this.relatesTo = [];
                for (let o of obj.relatesTo || []) {
                    this.relatesTo.push(new RelatesToComponent(o));
                }
            }
            if (obj.event) {
                this.event = [];
                for (let o of obj.event || []) {
                    this.event.push(new EventComponent(o));
                }
            }
            if (obj.section) {
                this.section = [];
                for (let o of obj.section || []) {
                    this.section.push(new SectionComponent(o));
                }
            }
        }
    }
}
exports.Composition = Composition;
class StageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.summary) {
                this.summary = new CodeableConcept(obj.summary);
            }
            if (obj.assessment) {
                this.assessment = [];
                for (let o of obj.assessment || []) {
                    this.assessment.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.StageComponent = StageComponent;
class EvidenceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.detail) {
                this.detail = [];
                for (let o of obj.detail || []) {
                    this.detail.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.EvidenceComponent = EvidenceComponent;
class Condition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Condition';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.clinicalStatus) {
                this.clinicalStatus = obj.clinicalStatus;
            }
            if (obj.verificationStatus) {
                this.verificationStatus = obj.verificationStatus;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.severity) {
                this.severity = new CodeableConcept(obj.severity);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.bodySite) {
                this.bodySite = [];
                for (let o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.onset) {
                this.onset = new Element(obj.onset);
            }
            if (obj.abatement) {
                this.abatement = new Element(obj.abatement);
            }
            if (obj.assertedDate) {
                this.assertedDate = new Date(obj.assertedDate);
            }
            if (obj.asserter) {
                this.asserter = new ResourceReference(obj.asserter);
            }
            if (obj.stage) {
                this.stage = new StageComponent(obj.stage);
            }
            if (obj.evidence) {
                this.evidence = [];
                for (let o of obj.evidence || []) {
                    this.evidence.push(new EvidenceComponent(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Condition = Condition;
class ActorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.ActorComponent = ActorComponent;
class PolicyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.authority) {
                this.authority = obj.authority;
            }
            if (obj.uri) {
                this.uri = obj.uri;
            }
        }
    }
}
exports.PolicyComponent = PolicyComponent;
class DataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.meaning) {
                this.meaning = obj.meaning;
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.DataComponent = DataComponent;
class ExceptActorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.ExceptActorComponent = ExceptActorComponent;
class ExceptDataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.meaning) {
                this.meaning = obj.meaning;
            }
            if (obj.reference) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.ExceptDataComponent = ExceptDataComponent;
class ExceptComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.actor) {
                this.actor = [];
                for (let o of obj.actor || []) {
                    this.actor.push(new ExceptActorComponent(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new CodeableConcept(o));
                }
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.purpose) {
                this.purpose = [];
                for (let o of obj.purpose || []) {
                    this.purpose.push(new Coding(o));
                }
            }
            if (obj.class) {
                this.class = [];
                for (let o of obj.class || []) {
                    this.class.push(new Coding(o));
                }
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.dataPeriod) {
                this.dataPeriod = new Period(obj.dataPeriod);
            }
            if (obj.data) {
                this.data = [];
                for (let o of obj.data || []) {
                    this.data.push(new ExceptDataComponent(o));
                }
            }
        }
    }
}
exports.ExceptComponent = ExceptComponent;
class Consent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Consent';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.dateTime) {
                this.dateTime = new Date(obj.dateTime);
            }
            if (obj.consentingParty) {
                this.consentingParty = [];
                for (let o of obj.consentingParty || []) {
                    this.consentingParty.push(new ResourceReference(o));
                }
            }
            if (obj.actor) {
                this.actor = [];
                for (let o of obj.actor || []) {
                    this.actor.push(new ActorComponent(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new CodeableConcept(o));
                }
            }
            if (obj.organization) {
                this.organization = [];
                for (let o of obj.organization || []) {
                    this.organization.push(new ResourceReference(o));
                }
            }
            if (obj.source) {
                this.source = new Element(obj.source);
            }
            if (obj.policy) {
                this.policy = [];
                for (let o of obj.policy || []) {
                    this.policy.push(new PolicyComponent(o));
                }
            }
            if (obj.policyRule) {
                this.policyRule = obj.policyRule;
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.purpose) {
                this.purpose = [];
                for (let o of obj.purpose || []) {
                    this.purpose.push(new Coding(o));
                }
            }
            if (obj.dataPeriod) {
                this.dataPeriod = new Period(obj.dataPeriod);
            }
            if (obj.data) {
                this.data = [];
                for (let o of obj.data || []) {
                    this.data.push(new DataComponent(o));
                }
            }
            if (obj.except) {
                this.except = [];
                for (let o of obj.except || []) {
                    this.except.push(new ExceptComponent(o));
                }
            }
        }
    }
}
exports.Consent = Consent;
class SignatoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new Coding(obj.type);
            }
            if (obj.party) {
                this.party = new ResourceReference(obj.party);
            }
            if (obj.signature) {
                this.signature = [];
                for (let o of obj.signature || []) {
                    this.signature.push(new Signature(o));
                }
            }
        }
    }
}
exports.SignatoryComponent = SignatoryComponent;
class ValuedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.entity) {
                this.entity = new Element(obj.entity);
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.effectiveTime) {
                this.effectiveTime = new Date(obj.effectiveTime);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.unitPrice) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.factor) {
                this.factor = obj.factor;
            }
            if (obj.points) {
                this.points = obj.points;
            }
            if (obj.net) {
                this.net = new Money(obj.net);
            }
        }
    }
}
exports.ValuedItemComponent = ValuedItemComponent;
class TermAgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.actor) {
                this.actor = new ResourceReference(obj.actor);
            }
            if (obj.role) {
                this.role = [];
                for (let o of obj.role || []) {
                    this.role.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.TermAgentComponent = TermAgentComponent;
class TermValuedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.entity) {
                this.entity = new Element(obj.entity);
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.effectiveTime) {
                this.effectiveTime = new Date(obj.effectiveTime);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.unitPrice) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.factor) {
                this.factor = obj.factor;
            }
            if (obj.points) {
                this.points = obj.points;
            }
            if (obj.net) {
                this.net = new Money(obj.net);
            }
        }
    }
}
exports.TermValuedItemComponent = TermValuedItemComponent;
class TermComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.issued) {
                this.issued = new Date(obj.issued);
            }
            if (obj.applies) {
                this.applies = new Period(obj.applies);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subType) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new ResourceReference(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new CodeableConcept(o));
                }
            }
            if (obj.actionReason) {
                this.actionReason = [];
                for (let o of obj.actionReason || []) {
                    this.actionReason.push(new CodeableConcept(o));
                }
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.agent) {
                this.agent = [];
                for (let o of obj.agent || []) {
                    this.agent.push(new TermAgentComponent(o));
                }
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.valuedItem) {
                this.valuedItem = [];
                for (let o of obj.valuedItem || []) {
                    this.valuedItem.push(new TermValuedItemComponent(o));
                }
            }
            if (obj.group) {
                this.group = [];
                for (let o of obj.group || []) {
                    this.group.push(new TermComponent(o));
                }
            }
        }
    }
}
exports.TermComponent = TermComponent;
class FriendlyLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.content) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.FriendlyLanguageComponent = FriendlyLanguageComponent;
class LegalLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.content) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.LegalLanguageComponent = LegalLanguageComponent;
class ComputableLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.content) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.ComputableLanguageComponent = ComputableLanguageComponent;
class Contract extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Contract';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.issued) {
                this.issued = new Date(obj.issued);
            }
            if (obj.applies) {
                this.applies = new Period(obj.applies);
            }
            if (obj.subject) {
                this.subject = [];
                for (let o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new ResourceReference(o));
                }
            }
            if (obj.authority) {
                this.authority = [];
                for (let o of obj.authority || []) {
                    this.authority.push(new ResourceReference(o));
                }
            }
            if (obj.domain) {
                this.domain = [];
                for (let o of obj.domain || []) {
                    this.domain.push(new ResourceReference(o));
                }
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subType) {
                this.subType = [];
                for (let o of obj.subType || []) {
                    this.subType.push(new CodeableConcept(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new CodeableConcept(o));
                }
            }
            if (obj.actionReason) {
                this.actionReason = [];
                for (let o of obj.actionReason || []) {
                    this.actionReason.push(new CodeableConcept(o));
                }
            }
            if (obj.decisionType) {
                this.decisionType = new CodeableConcept(obj.decisionType);
            }
            if (obj.contentDerivative) {
                this.contentDerivative = new CodeableConcept(obj.contentDerivative);
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.agent) {
                this.agent = [];
                for (let o of obj.agent || []) {
                    this.agent.push(new AgentComponent(o));
                }
            }
            if (obj.signer) {
                this.signer = [];
                for (let o of obj.signer || []) {
                    this.signer.push(new SignatoryComponent(o));
                }
            }
            if (obj.valuedItem) {
                this.valuedItem = [];
                for (let o of obj.valuedItem || []) {
                    this.valuedItem.push(new ValuedItemComponent(o));
                }
            }
            if (obj.term) {
                this.term = [];
                for (let o of obj.term || []) {
                    this.term.push(new TermComponent(o));
                }
            }
            if (obj.binding) {
                this.binding = new Element(obj.binding);
            }
            if (obj.friendly) {
                this.friendly = [];
                for (let o of obj.friendly || []) {
                    this.friendly.push(new FriendlyLanguageComponent(o));
                }
            }
            if (obj.legal) {
                this.legal = [];
                for (let o of obj.legal || []) {
                    this.legal.push(new LegalLanguageComponent(o));
                }
            }
            if (obj.rule) {
                this.rule = [];
                for (let o of obj.rule || []) {
                    this.rule.push(new ComputableLanguageComponent(o));
                }
            }
        }
    }
}
exports.Contract = Contract;
class Count extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Count = Count;
class Coverage extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Coverage';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.policyHolder) {
                this.policyHolder = new ResourceReference(obj.policyHolder);
            }
            if (obj.subscriber) {
                this.subscriber = new ResourceReference(obj.subscriber);
            }
            if (obj.subscriberId) {
                this.subscriberId = obj.subscriberId;
            }
            if (obj.beneficiary) {
                this.beneficiary = new ResourceReference(obj.beneficiary);
            }
            if (obj.relationship) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.payor) {
                this.payor = [];
                for (let o of obj.payor || []) {
                    this.payor.push(new ResourceReference(o));
                }
            }
            if (obj.grouping) {
                this.grouping = new GroupComponent(obj.grouping);
            }
            if (obj.dependent) {
                this.dependent = obj.dependent;
            }
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.order) {
                this.order = obj.order;
            }
            if (obj.network) {
                this.network = obj.network;
            }
            if (obj.contract) {
                this.contract = [];
                for (let o of obj.contract || []) {
                    this.contract.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Coverage = Coverage;
class DataElement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DataElement';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.stringency) {
                this.stringency = obj.stringency;
            }
            if (obj.mapping) {
                this.mapping = [];
                for (let o of obj.mapping || []) {
                    this.mapping.push(new MappingComponent(o));
                }
            }
            if (obj.element) {
                this.element = [];
                for (let o of obj.element || []) {
                    this.element.push(new ElementDefinition(o));
                }
            }
        }
    }
}
exports.DataElement = DataElement;
class CodeFilterComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.valueSet) {
                this.valueSet = new Element(obj.valueSet);
            }
            if (obj.valueCode) {
                this.valueCode = obj.valueCode;
            }
            if (obj.valueCoding) {
                this.valueCoding = [];
                for (let o of obj.valueCoding || []) {
                    this.valueCoding.push(new Coding(o));
                }
            }
            if (obj.valueCodeableConcept) {
                this.valueCodeableConcept = [];
                for (let o of obj.valueCodeableConcept || []) {
                    this.valueCodeableConcept.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.CodeFilterComponent = CodeFilterComponent;
class DateFilterComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.DateFilterComponent = DateFilterComponent;
class DataRequirement extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.profile) {
                this.profile = obj.profile;
            }
            if (obj.mustSupport) {
                this.mustSupport = obj.mustSupport;
            }
            if (obj.codeFilter) {
                this.codeFilter = [];
                for (let o of obj.codeFilter || []) {
                    this.codeFilter.push(new CodeFilterComponent(o));
                }
            }
            if (obj.dateFilter) {
                this.dateFilter = [];
                for (let o of obj.dateFilter || []) {
                    this.dateFilter.push(new DateFilterComponent(o));
                }
            }
        }
    }
}
exports.DataRequirement = DataRequirement;
class MitigationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.action) {
                this.action = new CodeableConcept(obj.action);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.MitigationComponent = MitigationComponent;
class DetectedIssue extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DetectedIssue';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.severity) {
                this.severity = obj.severity;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.implicated) {
                this.implicated = [];
                for (let o of obj.implicated || []) {
                    this.implicated.push(new ResourceReference(o));
                }
            }
            if (obj.detail) {
                this.detail = obj.detail;
            }
            if (obj.reference) {
                this.reference = obj.reference;
            }
            if (obj.mitigation) {
                this.mitigation = [];
                for (let o of obj.mitigation || []) {
                    this.mitigation.push(new MitigationComponent(o));
                }
            }
        }
    }
}
exports.DetectedIssue = DetectedIssue;
class UdiComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.deviceIdentifier) {
                this.deviceIdentifier = obj.deviceIdentifier;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.jurisdiction) {
                this.jurisdiction = obj.jurisdiction;
            }
            if (obj.carrierHRF) {
                this.carrierHRF = obj.carrierHRF;
            }
            if (obj.carrierAIDC) {
                this.carrierAIDC = obj.carrierAIDC;
            }
            if (obj.issuer) {
                this.issuer = obj.issuer;
            }
            if (obj.entryType) {
                this.entryType = obj.entryType;
            }
        }
    }
}
exports.UdiComponent = UdiComponent;
class Device extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Device';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.udi) {
                this.udi = new UdiComponent(obj.udi);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.lotNumber) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.manufacturer) {
                this.manufacturer = obj.manufacturer;
            }
            if (obj.manufactureDate) {
                this.manufactureDate = new Date(obj.manufactureDate);
            }
            if (obj.expirationDate) {
                this.expirationDate = new Date(obj.expirationDate);
            }
            if (obj.model) {
                this.model = obj.model;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.owner) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.safety) {
                this.safety = [];
                for (let o of obj.safety || []) {
                    this.safety.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.Device = Device;
class ProductionSpecificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.specType) {
                this.specType = new CodeableConcept(obj.specType);
            }
            if (obj.componentId) {
                this.componentId = new Identifier(obj.componentId);
            }
            if (obj.productionSpec) {
                this.productionSpec = obj.productionSpec;
            }
        }
    }
}
exports.ProductionSpecificationComponent = ProductionSpecificationComponent;
class DeviceComponent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceComponent';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.lastSystemChange) {
                this.lastSystemChange = new Date(obj.lastSystemChange);
            }
            if (obj.source) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.parent) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.operationalStatus) {
                this.operationalStatus = [];
                for (let o of obj.operationalStatus || []) {
                    this.operationalStatus.push(new CodeableConcept(o));
                }
            }
            if (obj.parameterGroup) {
                this.parameterGroup = new CodeableConcept(obj.parameterGroup);
            }
            if (obj.measurementPrinciple) {
                this.measurementPrinciple = obj.measurementPrinciple;
            }
            if (obj.productionSpecification) {
                this.productionSpecification = [];
                for (let o of obj.productionSpecification || []) {
                    this.productionSpecification.push(new ProductionSpecificationComponent(o));
                }
            }
            if (obj.languageCode) {
                this.languageCode = new CodeableConcept(obj.languageCode);
            }
        }
    }
}
exports.DeviceComponent = DeviceComponent;
class CalibrationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.state) {
                this.state = obj.state;
            }
            if (obj.time) {
                this.time = new Date(obj.time);
            }
        }
    }
}
exports.CalibrationComponent = CalibrationComponent;
class DeviceMetric extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceMetric';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.unit) {
                this.unit = new CodeableConcept(obj.unit);
            }
            if (obj.source) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.parent) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.operationalStatus) {
                this.operationalStatus = obj.operationalStatus;
            }
            if (obj.color) {
                this.color = obj.color;
            }
            if (obj.category) {
                this.category = obj.category;
            }
            if (obj.measurementPeriod) {
                this.measurementPeriod = new Timing(obj.measurementPeriod);
            }
            if (obj.calibration) {
                this.calibration = [];
                for (let o of obj.calibration || []) {
                    this.calibration.push(new CalibrationComponent(o));
                }
            }
        }
    }
}
exports.DeviceMetric = DeviceMetric;
class DeviceRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.priorRequest) {
                this.priorRequest = [];
                for (let o of obj.priorRequest || []) {
                    this.priorRequest.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = new CodeableConcept(obj.intent);
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.code) {
                this.code = new Element(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.performerType) {
                this.performerType = new CodeableConcept(obj.performerType);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.supportingInfo) {
                this.supportingInfo = [];
                for (let o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.relevantHistory) {
                this.relevantHistory = [];
                for (let o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.DeviceRequest = DeviceRequest;
class DeviceUseStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceUseStatement';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.whenUsed) {
                this.whenUsed = new Period(obj.whenUsed);
            }
            if (obj.timing) {
                this.timing = new Element(obj.timing);
            }
            if (obj.recordedOn) {
                this.recordedOn = new Date(obj.recordedOn);
            }
            if (obj.source) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.device) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.indication) {
                this.indication = [];
                for (let o of obj.indication || []) {
                    this.indication.push(new CodeableConcept(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.DeviceUseStatement = DeviceUseStatement;
class PerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.actor) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.PerformerComponent = PerformerComponent;
class ImageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.link) {
                this.link = new ResourceReference(obj.link);
            }
        }
    }
}
exports.ImageComponent = ImageComponent;
class DiagnosticReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DiagnosticReport';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.effective) {
                this.effective = new Element(obj.effective);
            }
            if (obj.issued) {
                this.issued = new Date(obj.issued);
            }
            if (obj.performer) {
                this.performer = [];
                for (let o of obj.performer || []) {
                    this.performer.push(new PerformerComponent(o));
                }
            }
            if (obj.specimen) {
                this.specimen = [];
                for (let o of obj.specimen || []) {
                    this.specimen.push(new ResourceReference(o));
                }
            }
            if (obj.result) {
                this.result = [];
                for (let o of obj.result || []) {
                    this.result.push(new ResourceReference(o));
                }
            }
            if (obj.imagingStudy) {
                this.imagingStudy = [];
                for (let o of obj.imagingStudy || []) {
                    this.imagingStudy.push(new ResourceReference(o));
                }
            }
            if (obj.image) {
                this.image = [];
                for (let o of obj.image || []) {
                    this.image.push(new ImageComponent(o));
                }
            }
            if (obj.conclusion) {
                this.conclusion = obj.conclusion;
            }
            if (obj.codedDiagnosis) {
                this.codedDiagnosis = [];
                for (let o of obj.codedDiagnosis || []) {
                    this.codedDiagnosis.push(new CodeableConcept(o));
                }
            }
            if (obj.presentedForm) {
                this.presentedForm = [];
                for (let o of obj.presentedForm || []) {
                    this.presentedForm.push(new Attachment(o));
                }
            }
        }
    }
}
exports.DiagnosticReport = DiagnosticReport;
class Distance extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Distance = Distance;
class ContentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.p) {
                this.p = new Element(obj.p);
            }
        }
    }
}
exports.ContentComponent = ContentComponent;
class DocumentManifest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DocumentManifest';
        if (obj) {
            if (obj.masterIdentifier) {
                this.masterIdentifier = new Identifier(obj.masterIdentifier);
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.author) {
                this.author = [];
                for (let o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.recipient) {
                this.recipient = [];
                for (let o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.source) {
                this.source = obj.source;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.content) {
                this.content = [];
                for (let o of obj.content || []) {
                    this.content.push(new ContentComponent(o));
                }
            }
            if (obj.related) {
                this.related = [];
                for (let o of obj.related || []) {
                    this.related.push(new RelatedComponent(o));
                }
            }
        }
    }
}
exports.DocumentManifest = DocumentManifest;
class ContextComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.event) {
                this.event = [];
                for (let o of obj.event || []) {
                    this.event.push(new CodeableConcept(o));
                }
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.facilityType) {
                this.facilityType = new CodeableConcept(obj.facilityType);
            }
            if (obj.practiceSetting) {
                this.practiceSetting = new CodeableConcept(obj.practiceSetting);
            }
            if (obj.sourcePatientInfo) {
                this.sourcePatientInfo = new ResourceReference(obj.sourcePatientInfo);
            }
            if (obj.related) {
                this.related = [];
                for (let o of obj.related || []) {
                    this.related.push(new RelatedComponent(o));
                }
            }
        }
    }
}
exports.ContextComponent = ContextComponent;
class DocumentReference extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DocumentReference';
        if (obj) {
            if (obj.masterIdentifier) {
                this.masterIdentifier = new Identifier(obj.masterIdentifier);
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.docStatus) {
                this.docStatus = obj.docStatus;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.class) {
                this.class = new CodeableConcept(obj.class);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.indexed) {
                this.indexed = new Date(obj.indexed);
            }
            if (obj.author) {
                this.author = [];
                for (let o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.authenticator) {
                this.authenticator = new ResourceReference(obj.authenticator);
            }
            if (obj.custodian) {
                this.custodian = new ResourceReference(obj.custodian);
            }
            if (obj.relatesTo) {
                this.relatesTo = [];
                for (let o of obj.relatesTo || []) {
                    this.relatesTo.push(new RelatesToComponent(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.securityLabel) {
                this.securityLabel = [];
                for (let o of obj.securityLabel || []) {
                    this.securityLabel.push(new CodeableConcept(o));
                }
            }
            if (obj.content) {
                this.content = [];
                for (let o of obj.content || []) {
                    this.content.push(new ContentComponent(o));
                }
            }
            if (obj.context) {
                this.context = new ContextComponent(obj.context);
            }
        }
    }
}
exports.DocumentReference = DocumentReference;
class Duration extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Duration = Duration;
class EligibilityRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EligibilityRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.priority) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.serviced) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.enterer) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.facility) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.coverage) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.businessArrangement) {
                this.businessArrangement = obj.businessArrangement;
            }
            if (obj.benefitCategory) {
                this.benefitCategory = new CodeableConcept(obj.benefitCategory);
            }
            if (obj.benefitSubCategory) {
                this.benefitSubCategory = new CodeableConcept(obj.benefitSubCategory);
            }
        }
    }
}
exports.EligibilityRequest = EligibilityRequest;
class ErrorsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.ErrorsComponent = ErrorsComponent;
class EligibilityResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EligibilityResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.requestProvider) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.requestOrganization) {
                this.requestOrganization = new ResourceReference(obj.requestOrganization);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.inforce) {
                this.inforce = obj.inforce;
            }
            if (obj.insurance) {
                this.insurance = [];
                for (let o of obj.insurance || []) {
                    this.insurance.push(new InsuranceComponent(o));
                }
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.error) {
                this.error = [];
                for (let o of obj.error || []) {
                    this.error.push(new ErrorsComponent(o));
                }
            }
        }
    }
}
exports.EligibilityResponse = EligibilityResponse;
class StatusHistoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.StatusHistoryComponent = StatusHistoryComponent;
class ClassHistoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.class) {
                this.class = new Coding(obj.class);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.ClassHistoryComponent = ClassHistoryComponent;
class HospitalizationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.preAdmissionIdentifier) {
                this.preAdmissionIdentifier = new Identifier(obj.preAdmissionIdentifier);
            }
            if (obj.origin) {
                this.origin = new ResourceReference(obj.origin);
            }
            if (obj.admitSource) {
                this.admitSource = new CodeableConcept(obj.admitSource);
            }
            if (obj.reAdmission) {
                this.reAdmission = new CodeableConcept(obj.reAdmission);
            }
            if (obj.dietPreference) {
                this.dietPreference = [];
                for (let o of obj.dietPreference || []) {
                    this.dietPreference.push(new CodeableConcept(o));
                }
            }
            if (obj.specialCourtesy) {
                this.specialCourtesy = [];
                for (let o of obj.specialCourtesy || []) {
                    this.specialCourtesy.push(new CodeableConcept(o));
                }
            }
            if (obj.specialArrangement) {
                this.specialArrangement = [];
                for (let o of obj.specialArrangement || []) {
                    this.specialArrangement.push(new CodeableConcept(o));
                }
            }
            if (obj.destination) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.dischargeDisposition) {
                this.dischargeDisposition = new CodeableConcept(obj.dischargeDisposition);
            }
        }
    }
}
exports.HospitalizationComponent = HospitalizationComponent;
class LocationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.LocationComponent = LocationComponent;
class Encounter extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Encounter';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.statusHistory) {
                this.statusHistory = [];
                for (let o of obj.statusHistory || []) {
                    this.statusHistory.push(new StatusHistoryComponent(o));
                }
            }
            if (obj.class) {
                this.class = new Coding(obj.class);
            }
            if (obj.classHistory) {
                this.classHistory = [];
                for (let o of obj.classHistory || []) {
                    this.classHistory.push(new ClassHistoryComponent(o));
                }
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.priority) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.episodeOfCare) {
                this.episodeOfCare = [];
                for (let o of obj.episodeOfCare || []) {
                    this.episodeOfCare.push(new ResourceReference(o));
                }
            }
            if (obj.incomingReferral) {
                this.incomingReferral = [];
                for (let o of obj.incomingReferral || []) {
                    this.incomingReferral.push(new ResourceReference(o));
                }
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.appointment) {
                this.appointment = new ResourceReference(obj.appointment);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.length) {
                this.length = new Duration(obj.length);
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.diagnosis) {
                this.diagnosis = [];
                for (let o of obj.diagnosis || []) {
                    this.diagnosis.push(new DiagnosisComponent(o));
                }
            }
            if (obj.account) {
                this.account = [];
                for (let o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
            if (obj.hospitalization) {
                this.hospitalization = new HospitalizationComponent(obj.hospitalization);
            }
            if (obj.location) {
                this.location = [];
                for (let o of obj.location || []) {
                    this.location.push(new LocationComponent(o));
                }
            }
            if (obj.serviceProvider) {
                this.serviceProvider = new ResourceReference(obj.serviceProvider);
            }
            if (obj.partOf) {
                this.partOf = new ResourceReference(obj.partOf);
            }
        }
    }
}
exports.Encounter = Encounter;
class Endpoint extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Endpoint';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.connectionType) {
                this.connectionType = new Coding(obj.connectionType);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.managingOrganization) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.payloadType) {
                this.payloadType = [];
                for (let o of obj.payloadType || []) {
                    this.payloadType.push(new CodeableConcept(o));
                }
            }
            if (obj.payloadMimeType) {
                this.payloadMimeType = obj.payloadMimeType;
            }
            if (obj.address) {
                this.address = obj.address;
            }
            if (obj.header) {
                this.header = obj.header;
            }
        }
    }
}
exports.Endpoint = Endpoint;
class EnrollmentRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EnrollmentRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.coverage) {
                this.coverage = new ResourceReference(obj.coverage);
            }
        }
    }
}
exports.EnrollmentRequest = EnrollmentRequest;
class EnrollmentResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EnrollmentResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.requestProvider) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.requestOrganization) {
                this.requestOrganization = new ResourceReference(obj.requestOrganization);
            }
        }
    }
}
exports.EnrollmentResponse = EnrollmentResponse;
class EpisodeOfCare extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EpisodeOfCare';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.statusHistory) {
                this.statusHistory = [];
                for (let o of obj.statusHistory || []) {
                    this.statusHistory.push(new StatusHistoryComponent(o));
                }
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.diagnosis) {
                this.diagnosis = [];
                for (let o of obj.diagnosis || []) {
                    this.diagnosis.push(new DiagnosisComponent(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.managingOrganization) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.referralRequest) {
                this.referralRequest = [];
                for (let o of obj.referralRequest || []) {
                    this.referralRequest.push(new ResourceReference(o));
                }
            }
            if (obj.careManager) {
                this.careManager = new ResourceReference(obj.careManager);
            }
            if (obj.team) {
                this.team = [];
                for (let o of obj.team || []) {
                    this.team.push(new ResourceReference(o));
                }
            }
            if (obj.account) {
                this.account = [];
                for (let o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.EpisodeOfCare = EpisodeOfCare;
class FixedVersionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
        }
    }
}
exports.FixedVersionComponent = FixedVersionComponent;
class ExcludedSystemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.version) {
                this.version = obj.version;
            }
        }
    }
}
exports.ExcludedSystemComponent = ExcludedSystemComponent;
class ExpansionProfile extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ExpansionProfile';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.fixedVersion) {
                this.fixedVersion = [];
                for (let o of obj.fixedVersion || []) {
                    this.fixedVersion.push(new FixedVersionComponent(o));
                }
            }
            if (obj.excludedSystem) {
                this.excludedSystem = new ExcludedSystemComponent(obj.excludedSystem);
            }
            if (obj.includeDesignations) {
                this.includeDesignations = obj.includeDesignations;
            }
            if (obj.designation) {
                this.designation = new DesignationComponent(obj.designation);
            }
            if (obj.includeDefinition) {
                this.includeDefinition = obj.includeDefinition;
            }
            if (obj.activeOnly) {
                this.activeOnly = obj.activeOnly;
            }
            if (obj.excludeNested) {
                this.excludeNested = obj.excludeNested;
            }
            if (obj.excludeNotForUI) {
                this.excludeNotForUI = obj.excludeNotForUI;
            }
            if (obj.excludePostCoordinated) {
                this.excludePostCoordinated = obj.excludePostCoordinated;
            }
            if (obj.displayLanguage) {
                this.displayLanguage = obj.displayLanguage;
            }
            if (obj.limitedExpansion) {
                this.limitedExpansion = obj.limitedExpansion;
            }
        }
    }
}
exports.ExpansionProfile = ExpansionProfile;
class SupportingInformationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequence) {
                this.sequence = obj.sequence;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.timing) {
                this.timing = new Element(obj.timing);
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
            if (obj.reason) {
                this.reason = new Coding(obj.reason);
            }
        }
    }
}
exports.SupportingInformationComponent = SupportingInformationComponent;
class BenefitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.allowed) {
                this.allowed = new Element(obj.allowed);
            }
            if (obj.used) {
                this.used = new Element(obj.used);
            }
        }
    }
}
exports.BenefitComponent = BenefitComponent;
class BenefitBalanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.subCategory) {
                this.subCategory = new CodeableConcept(obj.subCategory);
            }
            if (obj.excluded) {
                this.excluded = obj.excluded;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.network) {
                this.network = new CodeableConcept(obj.network);
            }
            if (obj.unit) {
                this.unit = new CodeableConcept(obj.unit);
            }
            if (obj.term) {
                this.term = new CodeableConcept(obj.term);
            }
            if (obj.financial) {
                this.financial = [];
                for (let o of obj.financial || []) {
                    this.financial.push(new BenefitComponent(o));
                }
            }
        }
    }
}
exports.BenefitBalanceComponent = BenefitBalanceComponent;
class ExplanationOfBenefit extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ExplanationOfBenefit';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subType) {
                this.subType = [];
                for (let o of obj.subType || []) {
                    this.subType.push(new CodeableConcept(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.billablePeriod) {
                this.billablePeriod = new Period(obj.billablePeriod);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.enterer) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.insurer) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.referral) {
                this.referral = new ResourceReference(obj.referral);
            }
            if (obj.facility) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.claim) {
                this.claim = new ResourceReference(obj.claim);
            }
            if (obj.claimResponse) {
                this.claimResponse = new ResourceReference(obj.claimResponse);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.related) {
                this.related = [];
                for (let o of obj.related || []) {
                    this.related.push(new RelatedClaimComponent(o));
                }
            }
            if (obj.prescription) {
                this.prescription = new ResourceReference(obj.prescription);
            }
            if (obj.originalPrescription) {
                this.originalPrescription = new ResourceReference(obj.originalPrescription);
            }
            if (obj.payee) {
                this.payee = new PayeeComponent(obj.payee);
            }
            if (obj.information) {
                this.information = [];
                for (let o of obj.information || []) {
                    this.information.push(new SupportingInformationComponent(o));
                }
            }
            if (obj.careTeam) {
                this.careTeam = [];
                for (let o of obj.careTeam || []) {
                    this.careTeam.push(new CareTeamComponent(o));
                }
            }
            if (obj.diagnosis) {
                this.diagnosis = [];
                for (let o of obj.diagnosis || []) {
                    this.diagnosis.push(new DiagnosisComponent(o));
                }
            }
            if (obj.procedure) {
                this.procedure = [];
                for (let o of obj.procedure || []) {
                    this.procedure.push(new ProcedureComponent(o));
                }
            }
            if (obj.precedence) {
                this.precedence = obj.precedence;
            }
            if (obj.insurance) {
                this.insurance = new InsuranceComponent(obj.insurance);
            }
            if (obj.accident) {
                this.accident = new AccidentComponent(obj.accident);
            }
            if (obj.employmentImpacted) {
                this.employmentImpacted = new Period(obj.employmentImpacted);
            }
            if (obj.hospitalization) {
                this.hospitalization = new Period(obj.hospitalization);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemComponent(o));
                }
            }
            if (obj.addItem) {
                this.addItem = [];
                for (let o of obj.addItem || []) {
                    this.addItem.push(new AddedItemComponent(o));
                }
            }
            if (obj.totalCost) {
                this.totalCost = new Money(obj.totalCost);
            }
            if (obj.unallocDeductable) {
                this.unallocDeductable = new Money(obj.unallocDeductable);
            }
            if (obj.totalBenefit) {
                this.totalBenefit = new Money(obj.totalBenefit);
            }
            if (obj.payment) {
                this.payment = new PaymentComponent(obj.payment);
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.processNote) {
                this.processNote = [];
                for (let o of obj.processNote || []) {
                    this.processNote.push(new NoteComponent(o));
                }
            }
            if (obj.benefitBalance) {
                this.benefitBalance = [];
                for (let o of obj.benefitBalance || []) {
                    this.benefitBalance.push(new BenefitBalanceComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefit = ExplanationOfBenefit;
class ConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.onset) {
                this.onset = new Element(obj.onset);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.ConditionComponent = ConditionComponent;
class FamilyMemberHistory extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'FamilyMemberHistory';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.notDone) {
                this.notDone = obj.notDone;
            }
            if (obj.notDoneReason) {
                this.notDoneReason = new CodeableConcept(obj.notDoneReason);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.relationship) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.gender) {
                this.gender = obj.gender;
            }
            if (obj.born) {
                this.born = new Element(obj.born);
            }
            if (obj.age) {
                this.age = new Element(obj.age);
            }
            if (obj.estimatedAge) {
                this.estimatedAge = obj.estimatedAge;
            }
            if (obj.deceased) {
                this.deceased = new Element(obj.deceased);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.condition) {
                this.condition = [];
                for (let o of obj.condition || []) {
                    this.condition.push(new ConditionComponent(o));
                }
            }
        }
    }
}
exports.FamilyMemberHistory = FamilyMemberHistory;
class TargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.measure) {
                this.measure = new CodeableConcept(obj.measure);
            }
            if (obj.detail) {
                this.detail = new Element(obj.detail);
            }
            if (obj.due) {
                this.due = new Element(obj.due);
            }
        }
    }
}
exports.TargetComponent = TargetComponent;
class Goal extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Goal';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.priority) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.description) {
                this.description = new CodeableConcept(obj.description);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.start) {
                this.start = new Element(obj.start);
            }
            if (obj.target) {
                this.target = new TargetComponent(obj.target);
            }
            if (obj.statusDate) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.statusReason) {
                this.statusReason = obj.statusReason;
            }
            if (obj.expressedBy) {
                this.expressedBy = new ResourceReference(obj.expressedBy);
            }
            if (obj.addresses) {
                this.addresses = [];
                for (let o of obj.addresses || []) {
                    this.addresses.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.outcomeCode) {
                this.outcomeCode = [];
                for (let o of obj.outcomeCode || []) {
                    this.outcomeCode.push(new CodeableConcept(o));
                }
            }
            if (obj.outcomeReference) {
                this.outcomeReference = [];
                for (let o of obj.outcomeReference || []) {
                    this.outcomeReference.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Goal = Goal;
class GraphDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'GraphDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.start) {
                this.start = obj.start;
            }
            if (obj.profile) {
                this.profile = obj.profile;
            }
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
        }
    }
}
exports.GraphDefinition = GraphDefinition;
class CharacteristicComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
            if (obj.exclude) {
                this.exclude = obj.exclude;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.CharacteristicComponent = CharacteristicComponent;
class MemberComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.entity) {
                this.entity = new ResourceReference(obj.entity);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.inactive) {
                this.inactive = obj.inactive;
            }
        }
    }
}
exports.MemberComponent = MemberComponent;
class Group extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Group';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.actual) {
                this.actual = obj.actual;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.quantity) {
                this.quantity = obj.quantity;
            }
            if (obj.characteristic) {
                this.characteristic = [];
                for (let o of obj.characteristic || []) {
                    this.characteristic.push(new CharacteristicComponent(o));
                }
            }
            if (obj.member) {
                this.member = [];
                for (let o of obj.member || []) {
                    this.member.push(new MemberComponent(o));
                }
            }
        }
    }
}
exports.Group = Group;
class GuidanceResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'GuidanceResponse';
        if (obj) {
            if (obj.requestId) {
                this.requestId = obj.requestId;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.module) {
                this.module = new ResourceReference(obj.module);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrenceDateTime) {
                this.occurrenceDateTime = new Date(obj.occurrenceDateTime);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.reason) {
                this.reason = new Element(obj.reason);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.evaluationMessage) {
                this.evaluationMessage = [];
                for (let o of obj.evaluationMessage || []) {
                    this.evaluationMessage.push(new ResourceReference(o));
                }
            }
            if (obj.outputParameters) {
                this.outputParameters = new ResourceReference(obj.outputParameters);
            }
            if (obj.result) {
                this.result = new ResourceReference(obj.result);
            }
            if (obj.dataRequirement) {
                this.dataRequirement = [];
                for (let o of obj.dataRequirement || []) {
                    this.dataRequirement.push(new DataRequirement(o));
                }
            }
        }
    }
}
exports.GuidanceResponse = GuidanceResponse;
class AvailableTimeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.daysOfWeek) {
                this.daysOfWeek = obj.daysOfWeek;
            }
            if (obj.allDay) {
                this.allDay = obj.allDay;
            }
            if (obj.availableStartTime) {
                this.availableStartTime = new Date(obj.availableStartTime);
            }
            if (obj.availableEndTime) {
                this.availableEndTime = new Date(obj.availableEndTime);
            }
        }
    }
}
exports.AvailableTimeComponent = AvailableTimeComponent;
class NotAvailableComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.during) {
                this.during = new Period(obj.during);
            }
        }
    }
}
exports.NotAvailableComponent = NotAvailableComponent;
class HealthcareService extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'HealthcareService';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.providedBy) {
                this.providedBy = new ResourceReference(obj.providedBy);
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.specialty) {
                this.specialty = [];
                for (let o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.location) {
                this.location = [];
                for (let o of obj.location || []) {
                    this.location.push(new ResourceReference(o));
                }
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.extraDetails) {
                this.extraDetails = obj.extraDetails;
            }
            if (obj.photo) {
                this.photo = new Attachment(obj.photo);
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.coverageArea) {
                this.coverageArea = [];
                for (let o of obj.coverageArea || []) {
                    this.coverageArea.push(new ResourceReference(o));
                }
            }
            if (obj.serviceProvisionCode) {
                this.serviceProvisionCode = [];
                for (let o of obj.serviceProvisionCode || []) {
                    this.serviceProvisionCode.push(new CodeableConcept(o));
                }
            }
            if (obj.eligibility) {
                this.eligibility = new CodeableConcept(obj.eligibility);
            }
            if (obj.eligibilityNote) {
                this.eligibilityNote = obj.eligibilityNote;
            }
            if (obj.programName) {
                this.programName = obj.programName;
            }
            if (obj.characteristic) {
                this.characteristic = [];
                for (let o of obj.characteristic || []) {
                    this.characteristic.push(new CodeableConcept(o));
                }
            }
            if (obj.referralMethod) {
                this.referralMethod = [];
                for (let o of obj.referralMethod || []) {
                    this.referralMethod.push(new CodeableConcept(o));
                }
            }
            if (obj.appointmentRequired) {
                this.appointmentRequired = obj.appointmentRequired;
            }
            if (obj.availableTime) {
                this.availableTime = [];
                for (let o of obj.availableTime || []) {
                    this.availableTime.push(new AvailableTimeComponent(o));
                }
            }
            if (obj.notAvailable) {
                this.notAvailable = [];
                for (let o of obj.notAvailable || []) {
                    this.notAvailable.push(new NotAvailableComponent(o));
                }
            }
            if (obj.availabilityExceptions) {
                this.availabilityExceptions = obj.availabilityExceptions;
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.HealthcareService = HealthcareService;
class HumanName extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.family) {
                this.family = obj.family;
            }
            if (obj.given) {
                this.given = obj.given;
            }
            if (obj.prefix) {
                this.prefix = obj.prefix;
            }
            if (obj.suffix) {
                this.suffix = obj.suffix;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
    getDisplay() {
        if (this.family && this.given && this.given.length > 0) {
            return this.family + ', ' + this.given[0];
        }
        else if (this.family) {
            return this.family;
        }
        else if (this.given && this.given.length > 0) {
            return this.given[0];
        }
    }
}
exports.HumanName = HumanName;
class InstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sopClass) {
                this.sopClass = obj.sopClass;
            }
            if (obj.uid) {
                this.uid = obj.uid;
            }
        }
    }
}
exports.InstanceComponent = InstanceComponent;
class SeriesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.uid) {
                this.uid = obj.uid;
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.instance) {
                this.instance = [];
                for (let o of obj.instance || []) {
                    this.instance.push(new InstanceComponent(o));
                }
            }
        }
    }
}
exports.SeriesComponent = SeriesComponent;
class StudyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.uid) {
                this.uid = obj.uid;
            }
            if (obj.imagingStudy) {
                this.imagingStudy = new ResourceReference(obj.imagingStudy);
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.series) {
                this.series = [];
                for (let o of obj.series || []) {
                    this.series.push(new SeriesComponent(o));
                }
            }
        }
    }
}
exports.StudyComponent = StudyComponent;
class ImagingManifest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImagingManifest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.authoringTime) {
                this.authoringTime = new Date(obj.authoringTime);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.study) {
                this.study = [];
                for (let o of obj.study || []) {
                    this.study.push(new StudyComponent(o));
                }
            }
        }
    }
}
exports.ImagingManifest = ImagingManifest;
class ImagingStudy extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImagingStudy';
        if (obj) {
            if (obj.uid) {
                this.uid = obj.uid;
            }
            if (obj.accession) {
                this.accession = new Identifier(obj.accession);
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.availability) {
                this.availability = obj.availability;
            }
            if (obj.modalityList) {
                this.modalityList = [];
                for (let o of obj.modalityList || []) {
                    this.modalityList.push(new Coding(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.started) {
                this.started = new Date(obj.started);
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.referrer) {
                this.referrer = new ResourceReference(obj.referrer);
            }
            if (obj.interpreter) {
                this.interpreter = [];
                for (let o of obj.interpreter || []) {
                    this.interpreter.push(new ResourceReference(o));
                }
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.numberOfSeries) {
                this.numberOfSeries = obj.numberOfSeries;
            }
            if (obj.numberOfInstances) {
                this.numberOfInstances = obj.numberOfInstances;
            }
            if (obj.procedureReference) {
                this.procedureReference = [];
                for (let o of obj.procedureReference || []) {
                    this.procedureReference.push(new ResourceReference(o));
                }
            }
            if (obj.procedureCode) {
                this.procedureCode = [];
                for (let o of obj.procedureCode || []) {
                    this.procedureCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reason) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.series) {
                this.series = [];
                for (let o of obj.series || []) {
                    this.series.push(new SeriesComponent(o));
                }
            }
        }
    }
}
exports.ImagingStudy = ImagingStudy;
class PractitionerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.role) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.actor) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.PractitionerComponent = PractitionerComponent;
class ExplanationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonNotGiven) {
                this.reasonNotGiven = [];
                for (let o of obj.reasonNotGiven || []) {
                    this.reasonNotGiven.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.ExplanationComponent = ExplanationComponent;
class VaccinationProtocolComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.doseSequence) {
                this.doseSequence = obj.doseSequence;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.authority) {
                this.authority = new ResourceReference(obj.authority);
            }
            if (obj.series) {
                this.series = obj.series;
            }
            if (obj.seriesDoses) {
                this.seriesDoses = obj.seriesDoses;
            }
            if (obj.targetDisease) {
                this.targetDisease = [];
                for (let o of obj.targetDisease || []) {
                    this.targetDisease.push(new CodeableConcept(o));
                }
            }
            if (obj.doseStatus) {
                this.doseStatus = new CodeableConcept(obj.doseStatus);
            }
            if (obj.doseStatusReason) {
                this.doseStatusReason = new CodeableConcept(obj.doseStatusReason);
            }
        }
    }
}
exports.VaccinationProtocolComponent = VaccinationProtocolComponent;
class Immunization extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Immunization';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.notGiven) {
                this.notGiven = obj.notGiven;
            }
            if (obj.vaccineCode) {
                this.vaccineCode = new CodeableConcept(obj.vaccineCode);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.primarySource) {
                this.primarySource = obj.primarySource;
            }
            if (obj.reportOrigin) {
                this.reportOrigin = new CodeableConcept(obj.reportOrigin);
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.manufacturer) {
                this.manufacturer = new ResourceReference(obj.manufacturer);
            }
            if (obj.lotNumber) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.expirationDate) {
                this.expirationDate = new Date(obj.expirationDate);
            }
            if (obj.site) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.route) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.doseQuantity) {
                this.doseQuantity = new SimpleQuantity(obj.doseQuantity);
            }
            if (obj.practitioner) {
                this.practitioner = [];
                for (let o of obj.practitioner || []) {
                    this.practitioner.push(new PractitionerComponent(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.explanation) {
                this.explanation = new ExplanationComponent(obj.explanation);
            }
            if (obj.reaction) {
                this.reaction = [];
                for (let o of obj.reaction || []) {
                    this.reaction.push(new ReactionComponent(o));
                }
            }
            if (obj.vaccinationProtocol) {
                this.vaccinationProtocol = [];
                for (let o of obj.vaccinationProtocol || []) {
                    this.vaccinationProtocol.push(new VaccinationProtocolComponent(o));
                }
            }
        }
    }
}
exports.Immunization = Immunization;
class DateCriterionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.value) {
                this.value = new Date(obj.value);
            }
        }
    }
}
exports.DateCriterionComponent = DateCriterionComponent;
class ProtocolComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.doseSequence) {
                this.doseSequence = obj.doseSequence;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.authority) {
                this.authority = new ResourceReference(obj.authority);
            }
            if (obj.series) {
                this.series = obj.series;
            }
        }
    }
}
exports.ProtocolComponent = ProtocolComponent;
class RecommendationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.vaccineCode) {
                this.vaccineCode = new CodeableConcept(obj.vaccineCode);
            }
            if (obj.targetDisease) {
                this.targetDisease = new CodeableConcept(obj.targetDisease);
            }
            if (obj.doseNumber) {
                this.doseNumber = obj.doseNumber;
            }
            if (obj.forecastStatus) {
                this.forecastStatus = new CodeableConcept(obj.forecastStatus);
            }
            if (obj.dateCriterion) {
                this.dateCriterion = [];
                for (let o of obj.dateCriterion || []) {
                    this.dateCriterion.push(new DateCriterionComponent(o));
                }
            }
            if (obj.protocol) {
                this.protocol = new ProtocolComponent(obj.protocol);
            }
            if (obj.supportingImmunization) {
                this.supportingImmunization = [];
                for (let o of obj.supportingImmunization || []) {
                    this.supportingImmunization.push(new ResourceReference(o));
                }
            }
            if (obj.supportingPatientInformation) {
                this.supportingPatientInformation = [];
                for (let o of obj.supportingPatientInformation || []) {
                    this.supportingPatientInformation.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.RecommendationComponent = RecommendationComponent;
class ImmunizationRecommendation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImmunizationRecommendation';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.recommendation) {
                this.recommendation = [];
                for (let o of obj.recommendation || []) {
                    this.recommendation.push(new RecommendationComponent(o));
                }
            }
        }
    }
}
exports.ImmunizationRecommendation = ImmunizationRecommendation;
class DependencyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.uri) {
                this.uri = obj.uri;
            }
        }
    }
}
exports.DependencyComponent = DependencyComponent;
class PackageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.resource) {
                this.resource = [];
                for (let o of obj.resource || []) {
                    this.resource.push(new PackageResourceComponent(o));
                }
            }
        }
    }
}
exports.PackageComponent = PackageComponent;
class GlobalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
        }
    }
}
exports.GlobalComponent = GlobalComponent;
class PageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.source) {
                this.source = obj.source;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.package) {
                this.package = obj.package;
            }
            if (obj.format) {
                this.format = obj.format;
            }
            if (obj.page) {
                this.page = [];
                for (let o of obj.page || []) {
                    this.page.push(new PageComponent(o));
                }
            }
        }
    }
}
exports.PageComponent = PageComponent;
class ImplementationGuide extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImplementationGuide';
        this.status = 'draft';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.fhirVersion) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.dependency) {
                this.dependency = [];
                for (let o of obj.dependency || []) {
                    this.dependency.push(new DependencyComponent(o));
                }
            }
            if (obj.package) {
                this.package = [];
                for (let o of obj.package || []) {
                    this.package.push(new PackageComponent(o));
                }
            }
            if (obj.global) {
                this.global = [];
                for (let o of obj.global || []) {
                    this.global.push(new GlobalComponent(o));
                }
            }
            if (obj.binary) {
                this.binary = obj.binary;
            }
            if (obj.page) {
                this.page = new PageComponent(obj.page);
            }
        }
    }
}
exports.ImplementationGuide = ImplementationGuide;
class ParameterDefinition extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.use) {
                this.use = obj.use;
            }
            if (obj.min) {
                this.min = obj.min;
            }
            if (obj.max) {
                this.max = obj.max;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
        }
    }
}
exports.ParameterDefinition = ParameterDefinition;
class Library extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Library';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.contributor) {
                this.contributor = [];
                for (let o of obj.contributor || []) {
                    this.contributor.push(new Contributor(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.parameter) {
                this.parameter = [];
                for (let o of obj.parameter || []) {
                    this.parameter.push(new ParameterDefinition(o));
                }
            }
            if (obj.dataRequirement) {
                this.dataRequirement = [];
                for (let o of obj.dataRequirement || []) {
                    this.dataRequirement.push(new DataRequirement(o));
                }
            }
            if (obj.content) {
                this.content = [];
                for (let o of obj.content || []) {
                    this.content.push(new Attachment(o));
                }
            }
        }
    }
}
exports.Library = Library;
class Linkage extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Linkage';
        if (obj) {
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemComponent(o));
                }
            }
        }
    }
}
exports.Linkage = Linkage;
class List extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'List';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.source) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.orderedBy) {
                this.orderedBy = new CodeableConcept(obj.orderedBy);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.entry) {
                this.entry = [];
                for (let o of obj.entry || []) {
                    this.entry.push(new EntryComponent(o));
                }
            }
            if (obj.emptyReason) {
                this.emptyReason = new CodeableConcept(obj.emptyReason);
            }
        }
    }
}
exports.List = List;
class PositionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.longitude) {
                this.longitude = obj.longitude;
            }
            if (obj.latitude) {
                this.latitude = obj.latitude;
            }
            if (obj.altitude) {
                this.altitude = obj.altitude;
            }
        }
    }
}
exports.PositionComponent = PositionComponent;
class Location extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Location';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.operationalStatus) {
                this.operationalStatus = new Coding(obj.operationalStatus);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.alias) {
                this.alias = obj.alias;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.address) {
                this.address = new Address(obj.address);
            }
            if (obj.physicalType) {
                this.physicalType = new CodeableConcept(obj.physicalType);
            }
            if (obj.position) {
                this.position = new PositionComponent(obj.position);
            }
            if (obj.managingOrganization) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.partOf) {
                this.partOf = new ResourceReference(obj.partOf);
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Location = Location;
class SupplementalDataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.usage) {
                this.usage = [];
                for (let o of obj.usage || []) {
                    this.usage.push(new CodeableConcept(o));
                }
            }
            if (obj.criteria) {
                this.criteria = obj.criteria;
            }
            if (obj.path) {
                this.path = obj.path;
            }
        }
    }
}
exports.SupplementalDataComponent = SupplementalDataComponent;
class Measure extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Measure';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.contributor) {
                this.contributor = [];
                for (let o of obj.contributor || []) {
                    this.contributor.push(new Contributor(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.library) {
                this.library = [];
                for (let o of obj.library || []) {
                    this.library.push(new ResourceReference(o));
                }
            }
            if (obj.disclaimer) {
                this.disclaimer = obj.disclaimer;
            }
            if (obj.scoring) {
                this.scoring = new CodeableConcept(obj.scoring);
            }
            if (obj.compositeScoring) {
                this.compositeScoring = new CodeableConcept(obj.compositeScoring);
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.riskAdjustment) {
                this.riskAdjustment = obj.riskAdjustment;
            }
            if (obj.rateAggregation) {
                this.rateAggregation = obj.rateAggregation;
            }
            if (obj.rationale) {
                this.rationale = obj.rationale;
            }
            if (obj.clinicalRecommendationStatement) {
                this.clinicalRecommendationStatement = obj.clinicalRecommendationStatement;
            }
            if (obj.improvementNotation) {
                this.improvementNotation = obj.improvementNotation;
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.guidance) {
                this.guidance = obj.guidance;
            }
            if (obj.set) {
                this.set = obj.set;
            }
            if (obj.group) {
                this.group = [];
                for (let o of obj.group || []) {
                    this.group.push(new GroupComponent(o));
                }
            }
            if (obj.supplementalData) {
                this.supplementalData = [];
                for (let o of obj.supplementalData || []) {
                    this.supplementalData.push(new SupplementalDataComponent(o));
                }
            }
        }
    }
}
exports.Measure = Measure;
class MeasureReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MeasureReport';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.measure) {
                this.measure = new ResourceReference(obj.measure);
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.reportingOrganization) {
                this.reportingOrganization = new ResourceReference(obj.reportingOrganization);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.group) {
                this.group = [];
                for (let o of obj.group || []) {
                    this.group.push(new GroupComponent(o));
                }
            }
            if (obj.evaluatedResources) {
                this.evaluatedResources = new ResourceReference(obj.evaluatedResources);
            }
        }
    }
}
exports.MeasureReport = MeasureReport;
class Media extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Media';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.subtype) {
                this.subtype = new CodeableConcept(obj.subtype);
            }
            if (obj.view) {
                this.view = new CodeableConcept(obj.view);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.operator) {
                this.operator = new ResourceReference(obj.operator);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.device) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.height) {
                this.height = obj.height;
            }
            if (obj.width) {
                this.width = obj.width;
            }
            if (obj.frames) {
                this.frames = obj.frames;
            }
            if (obj.duration) {
                this.duration = obj.duration;
            }
            if (obj.content) {
                this.content = new Attachment(obj.content);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Media = Media;
class IngredientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.item) {
                this.item = new Element(obj.item);
            }
            if (obj.isActive) {
                this.isActive = obj.isActive;
            }
            if (obj.amount) {
                this.amount = new Ratio(obj.amount);
            }
        }
    }
}
exports.IngredientComponent = IngredientComponent;
class Medication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Medication';
        if (obj) {
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.isBrand) {
                this.isBrand = obj.isBrand;
            }
            if (obj.isOverTheCounter) {
                this.isOverTheCounter = obj.isOverTheCounter;
            }
            if (obj.manufacturer) {
                this.manufacturer = new ResourceReference(obj.manufacturer);
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.ingredient) {
                this.ingredient = [];
                for (let o of obj.ingredient || []) {
                    this.ingredient.push(new IngredientComponent(o));
                }
            }
            if (obj.package) {
                this.package = new PackageComponent(obj.package);
            }
            if (obj.image) {
                this.image = [];
                for (let o of obj.image || []) {
                    this.image.push(new Attachment(o));
                }
            }
        }
    }
}
exports.Medication = Medication;
class DosageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.site) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.route) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.dose) {
                this.dose = new SimpleQuantity(obj.dose);
            }
            if (obj.rate) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.DosageComponent = DosageComponent;
class MedicationAdministration extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationAdministration';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.medication) {
                this.medication = new Element(obj.medication);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.supportingInformation) {
                this.supportingInformation = [];
                for (let o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.effective) {
                this.effective = new Element(obj.effective);
            }
            if (obj.performer) {
                this.performer = [];
                for (let o of obj.performer || []) {
                    this.performer.push(new PerformerComponent(o));
                }
            }
            if (obj.notGiven) {
                this.notGiven = obj.notGiven;
            }
            if (obj.reasonNotGiven) {
                this.reasonNotGiven = [];
                for (let o of obj.reasonNotGiven || []) {
                    this.reasonNotGiven.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.prescription) {
                this.prescription = new ResourceReference(obj.prescription);
            }
            if (obj.device) {
                this.device = [];
                for (let o of obj.device || []) {
                    this.device.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.dosage) {
                this.dosage = new DosageComponent(obj.dosage);
            }
            if (obj.eventHistory) {
                this.eventHistory = [];
                for (let o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationAdministration = MedicationAdministration;
class SubstitutionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.wasSubstituted) {
                this.wasSubstituted = obj.wasSubstituted;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.responsibleParty) {
                this.responsibleParty = [];
                for (let o of obj.responsibleParty || []) {
                    this.responsibleParty.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SubstitutionComponent = SubstitutionComponent;
class MedicationDispense extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationDispense';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.medication) {
                this.medication = new Element(obj.medication);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.supportingInformation) {
                this.supportingInformation = [];
                for (let o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.performer) {
                this.performer = [];
                for (let o of obj.performer || []) {
                    this.performer.push(new PerformerComponent(o));
                }
            }
            if (obj.authorizingPrescription) {
                this.authorizingPrescription = [];
                for (let o of obj.authorizingPrescription || []) {
                    this.authorizingPrescription.push(new ResourceReference(o));
                }
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.daysSupply) {
                this.daysSupply = new SimpleQuantity(obj.daysSupply);
            }
            if (obj.whenPrepared) {
                this.whenPrepared = new Date(obj.whenPrepared);
            }
            if (obj.whenHandedOver) {
                this.whenHandedOver = new Date(obj.whenHandedOver);
            }
            if (obj.destination) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.receiver) {
                this.receiver = [];
                for (let o of obj.receiver || []) {
                    this.receiver.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.dosageInstruction) {
                this.dosageInstruction = [];
                for (let o of obj.dosageInstruction || []) {
                    this.dosageInstruction.push(new Dosage(o));
                }
            }
            if (obj.substitution) {
                this.substitution = new SubstitutionComponent(obj.substitution);
            }
            if (obj.detectedIssue) {
                this.detectedIssue = [];
                for (let o of obj.detectedIssue || []) {
                    this.detectedIssue.push(new ResourceReference(o));
                }
            }
            if (obj.notDone) {
                this.notDone = obj.notDone;
            }
            if (obj.notDoneReason) {
                this.notDoneReason = new Element(obj.notDoneReason);
            }
            if (obj.eventHistory) {
                this.eventHistory = [];
                for (let o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationDispense = MedicationDispense;
class DispenseRequestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.validityPeriod) {
                this.validityPeriod = new Period(obj.validityPeriod);
            }
            if (obj.numberOfRepeatsAllowed) {
                this.numberOfRepeatsAllowed = obj.numberOfRepeatsAllowed;
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.expectedSupplyDuration) {
                this.expectedSupplyDuration = new Duration(obj.expectedSupplyDuration);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
        }
    }
}
exports.DispenseRequestComponent = DispenseRequestComponent;
class MedicationRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.medication) {
                this.medication = new Element(obj.medication);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.supportingInformation) {
                this.supportingInformation = [];
                for (let o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.recorder) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.dosageInstruction) {
                this.dosageInstruction = [];
                for (let o of obj.dosageInstruction || []) {
                    this.dosageInstruction.push(new Dosage(o));
                }
            }
            if (obj.dispenseRequest) {
                this.dispenseRequest = new DispenseRequestComponent(obj.dispenseRequest);
            }
            if (obj.substitution) {
                this.substitution = new SubstitutionComponent(obj.substitution);
            }
            if (obj.priorPrescription) {
                this.priorPrescription = new ResourceReference(obj.priorPrescription);
            }
            if (obj.detectedIssue) {
                this.detectedIssue = [];
                for (let o of obj.detectedIssue || []) {
                    this.detectedIssue.push(new ResourceReference(o));
                }
            }
            if (obj.eventHistory) {
                this.eventHistory = [];
                for (let o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationRequest = MedicationRequest;
class MedicationStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationStatement';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.medication) {
                this.medication = new Element(obj.medication);
            }
            if (obj.effective) {
                this.effective = new Element(obj.effective);
            }
            if (obj.dateAsserted) {
                this.dateAsserted = new Date(obj.dateAsserted);
            }
            if (obj.informationSource) {
                this.informationSource = new ResourceReference(obj.informationSource);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.derivedFrom) {
                this.derivedFrom = [];
                for (let o of obj.derivedFrom || []) {
                    this.derivedFrom.push(new ResourceReference(o));
                }
            }
            if (obj.taken) {
                this.taken = obj.taken;
            }
            if (obj.reasonNotTaken) {
                this.reasonNotTaken = [];
                for (let o of obj.reasonNotTaken || []) {
                    this.reasonNotTaken.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.dosage) {
                this.dosage = [];
                for (let o of obj.dosage || []) {
                    this.dosage.push(new Dosage(o));
                }
            }
        }
    }
}
exports.MedicationStatement = MedicationStatement;
class FocusComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.profile) {
                this.profile = new ResourceReference(obj.profile);
            }
            if (obj.min) {
                this.min = obj.min;
            }
            if (obj.max) {
                this.max = obj.max;
            }
        }
    }
}
exports.FocusComponent = FocusComponent;
class AllowedResponseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.message) {
                this.message = new ResourceReference(obj.message);
            }
            if (obj.situation) {
                this.situation = obj.situation;
            }
        }
    }
}
exports.AllowedResponseComponent = AllowedResponseComponent;
class MessageDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MessageDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.base) {
                this.base = new ResourceReference(obj.base);
            }
            if (obj.parent) {
                this.parent = [];
                for (let o of obj.parent || []) {
                    this.parent.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.event) {
                this.event = new Coding(obj.event);
            }
            if (obj.category) {
                this.category = obj.category;
            }
            if (obj.focus) {
                this.focus = [];
                for (let o of obj.focus || []) {
                    this.focus.push(new FocusComponent(o));
                }
            }
            if (obj.responseRequired) {
                this.responseRequired = obj.responseRequired;
            }
            if (obj.allowedResponse) {
                this.allowedResponse = [];
                for (let o of obj.allowedResponse || []) {
                    this.allowedResponse.push(new AllowedResponseComponent(o));
                }
            }
        }
    }
}
exports.MessageDefinition = MessageDefinition;
class MessageDestinationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.target) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.endpoint) {
                this.endpoint = obj.endpoint;
            }
        }
    }
}
exports.MessageDestinationComponent = MessageDestinationComponent;
class MessageSourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.software) {
                this.software = obj.software;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.contact) {
                this.contact = new ContactPoint(obj.contact);
            }
            if (obj.endpoint) {
                this.endpoint = obj.endpoint;
            }
        }
    }
}
exports.MessageSourceComponent = MessageSourceComponent;
class MessageHeader extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MessageHeader';
        if (obj) {
            if (obj.event) {
                this.event = new Coding(obj.event);
            }
            if (obj.destination) {
                this.destination = [];
                for (let o of obj.destination || []) {
                    this.destination.push(new MessageDestinationComponent(o));
                }
            }
            if (obj.receiver) {
                this.receiver = new ResourceReference(obj.receiver);
            }
            if (obj.sender) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.timestamp) {
                this.timestamp = new Date(obj.timestamp);
            }
            if (obj.enterer) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.source) {
                this.source = new MessageSourceComponent(obj.source);
            }
            if (obj.responsible) {
                this.responsible = new ResourceReference(obj.responsible);
            }
            if (obj.reason) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.response) {
                this.response = new ResponseComponent(obj.response);
            }
            if (obj.focus) {
                this.focus = [];
                for (let o of obj.focus || []) {
                    this.focus.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MessageHeader = MessageHeader;
class UniqueIdComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.value) {
                this.value = obj.value;
            }
            if (obj.preferred) {
                this.preferred = obj.preferred;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.UniqueIdComponent = UniqueIdComponent;
class NamingSystem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'NamingSystem';
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.responsible) {
                this.responsible = obj.responsible;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.uniqueId) {
                this.uniqueId = [];
                for (let o of obj.uniqueId || []) {
                    this.uniqueId.push(new UniqueIdComponent(o));
                }
            }
            if (obj.replacedBy) {
                this.replacedBy = new ResourceReference(obj.replacedBy);
            }
        }
    }
}
exports.NamingSystem = NamingSystem;
class NutrientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.modifier) {
                this.modifier = new CodeableConcept(obj.modifier);
            }
            if (obj.amount) {
                this.amount = new SimpleQuantity(obj.amount);
            }
        }
    }
}
exports.NutrientComponent = NutrientComponent;
class TextureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.modifier) {
                this.modifier = new CodeableConcept(obj.modifier);
            }
            if (obj.foodType) {
                this.foodType = new CodeableConcept(obj.foodType);
            }
        }
    }
}
exports.TextureComponent = TextureComponent;
class OralDietComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.schedule) {
                this.schedule = [];
                for (let o of obj.schedule || []) {
                    this.schedule.push(new Timing(o));
                }
            }
            if (obj.nutrient) {
                this.nutrient = [];
                for (let o of obj.nutrient || []) {
                    this.nutrient.push(new NutrientComponent(o));
                }
            }
            if (obj.texture) {
                this.texture = [];
                for (let o of obj.texture || []) {
                    this.texture.push(new TextureComponent(o));
                }
            }
            if (obj.fluidConsistencyType) {
                this.fluidConsistencyType = [];
                for (let o of obj.fluidConsistencyType || []) {
                    this.fluidConsistencyType.push(new CodeableConcept(o));
                }
            }
            if (obj.instruction) {
                this.instruction = obj.instruction;
            }
        }
    }
}
exports.OralDietComponent = OralDietComponent;
class SupplementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.productName) {
                this.productName = obj.productName;
            }
            if (obj.schedule) {
                this.schedule = [];
                for (let o of obj.schedule || []) {
                    this.schedule.push(new Timing(o));
                }
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.instruction) {
                this.instruction = obj.instruction;
            }
        }
    }
}
exports.SupplementComponent = SupplementComponent;
class AdministrationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.schedule) {
                this.schedule = new Timing(obj.schedule);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.rate) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.AdministrationComponent = AdministrationComponent;
class EnteralFormulaComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.baseFormulaType) {
                this.baseFormulaType = new CodeableConcept(obj.baseFormulaType);
            }
            if (obj.baseFormulaProductName) {
                this.baseFormulaProductName = obj.baseFormulaProductName;
            }
            if (obj.additiveType) {
                this.additiveType = new CodeableConcept(obj.additiveType);
            }
            if (obj.additiveProductName) {
                this.additiveProductName = obj.additiveProductName;
            }
            if (obj.caloricDensity) {
                this.caloricDensity = new SimpleQuantity(obj.caloricDensity);
            }
            if (obj.routeofAdministration) {
                this.routeofAdministration = new CodeableConcept(obj.routeofAdministration);
            }
            if (obj.administration) {
                this.administration = [];
                for (let o of obj.administration || []) {
                    this.administration.push(new AdministrationComponent(o));
                }
            }
            if (obj.maxVolumeToDeliver) {
                this.maxVolumeToDeliver = new SimpleQuantity(obj.maxVolumeToDeliver);
            }
            if (obj.administrationInstruction) {
                this.administrationInstruction = obj.administrationInstruction;
            }
        }
    }
}
exports.EnteralFormulaComponent = EnteralFormulaComponent;
class NutritionOrder extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'NutritionOrder';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.dateTime) {
                this.dateTime = new Date(obj.dateTime);
            }
            if (obj.orderer) {
                this.orderer = new ResourceReference(obj.orderer);
            }
            if (obj.allergyIntolerance) {
                this.allergyIntolerance = [];
                for (let o of obj.allergyIntolerance || []) {
                    this.allergyIntolerance.push(new ResourceReference(o));
                }
            }
            if (obj.foodPreferenceModifier) {
                this.foodPreferenceModifier = [];
                for (let o of obj.foodPreferenceModifier || []) {
                    this.foodPreferenceModifier.push(new CodeableConcept(o));
                }
            }
            if (obj.excludeFoodModifier) {
                this.excludeFoodModifier = [];
                for (let o of obj.excludeFoodModifier || []) {
                    this.excludeFoodModifier.push(new CodeableConcept(o));
                }
            }
            if (obj.oralDiet) {
                this.oralDiet = new OralDietComponent(obj.oralDiet);
            }
            if (obj.supplement) {
                this.supplement = [];
                for (let o of obj.supplement || []) {
                    this.supplement.push(new SupplementComponent(o));
                }
            }
            if (obj.enteralFormula) {
                this.enteralFormula = new EnteralFormulaComponent(obj.enteralFormula);
            }
        }
    }
}
exports.NutritionOrder = NutritionOrder;
class OverloadComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.parameterName) {
                this.parameterName = obj.parameterName;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.OverloadComponent = OverloadComponent;
class OperationDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'OperationDefinition';
        this.status = 'draft';
        this.kind = 'operation';
        this.system = false;
        this.type = false;
        this.instance = false;
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.kind) {
                this.kind = obj.kind;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = obj.date;
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.idempotent) {
                this.idempotent = obj.idempotent;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
            if (obj.base) {
                this.base = new ResourceReference(obj.base);
            }
            if (obj.resource) {
                this.resource = obj.resource;
            }
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.instance) {
                this.instance = obj.instance;
            }
            if (obj.parameter) {
                this.parameter = [];
                for (let o of obj.parameter || []) {
                    this.parameter.push(new ParameterComponent(o));
                }
            }
            if (obj.overload) {
                this.overload = [];
                for (let o of obj.overload || []) {
                    this.overload.push(new OverloadComponent(o));
                }
            }
        }
    }
}
exports.OperationDefinition = OperationDefinition;
class IssueComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.severity) {
                this.severity = obj.severity;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.details) {
                this.details = new CodeableConcept(obj.details);
            }
            if (obj.diagnostics) {
                this.diagnostics = obj.diagnostics;
            }
            if (obj.location) {
                this.location = obj.location;
            }
            if (obj.expression) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.IssueComponent = IssueComponent;
class OperationOutcome extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'OperationOutcome';
        if (obj) {
            if (obj.issue) {
                this.issue = [];
                for (let o of obj.issue || []) {
                    this.issue.push(new IssueComponent(o));
                }
            }
            if (obj.location && obj.location.length > 0) {
                this.location = [];
                for (let o of obj.location || []) {
                    this.location.push(o);
                }
            }
        }
    }
}
exports.OperationOutcome = OperationOutcome;
class ContactComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.purpose) {
                this.purpose = new CodeableConcept(obj.purpose);
            }
            if (obj.name) {
                this.name = new HumanName(obj.name);
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.address) {
                this.address = new Address(obj.address);
            }
        }
    }
}
exports.ContactComponent = ContactComponent;
class Organization extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Organization';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.type) {
                this.type = [];
                for (let o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.alias) {
                this.alias = obj.alias;
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.address) {
                this.address = [];
                for (let o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.partOf) {
                this.partOf = new ResourceReference(obj.partOf);
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactComponent(o));
                }
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Organization = Organization;
class AnimalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.species) {
                this.species = new CodeableConcept(obj.species);
            }
            if (obj.breed) {
                this.breed = new CodeableConcept(obj.breed);
            }
            if (obj.genderStatus) {
                this.genderStatus = new CodeableConcept(obj.genderStatus);
            }
        }
    }
}
exports.AnimalComponent = AnimalComponent;
class CommunicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.language) {
                this.language = new CodeableConcept(obj.language);
            }
            if (obj.preferred) {
                this.preferred = obj.preferred;
            }
        }
    }
}
exports.CommunicationComponent = CommunicationComponent;
class Patient extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Patient';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.name) {
                this.name = [];
                for (let o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.gender) {
                this.gender = obj.gender;
            }
            if (obj.birthDate) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.deceased) {
                this.deceased = new Element(obj.deceased);
            }
            if (obj.address) {
                this.address = [];
                for (let o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.maritalStatus) {
                this.maritalStatus = new CodeableConcept(obj.maritalStatus);
            }
            if (obj.multipleBirth) {
                this.multipleBirth = new Element(obj.multipleBirth);
            }
            if (obj.photo) {
                this.photo = [];
                for (let o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactComponent(o));
                }
            }
            if (obj.animal) {
                this.animal = new AnimalComponent(obj.animal);
            }
            if (obj.communication) {
                this.communication = [];
                for (let o of obj.communication || []) {
                    this.communication.push(new CommunicationComponent(o));
                }
            }
            if (obj.generalPractitioner) {
                this.generalPractitioner = [];
                for (let o of obj.generalPractitioner || []) {
                    this.generalPractitioner.push(new ResourceReference(o));
                }
            }
            if (obj.managingOrganization) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
        }
    }
}
exports.Patient = Patient;
class PaymentNotice extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PaymentNotice';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.response) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.statusDate) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.target) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.paymentStatus) {
                this.paymentStatus = new CodeableConcept(obj.paymentStatus);
            }
        }
    }
}
exports.PaymentNotice = PaymentNotice;
class DetailsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.response) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.submitter) {
                this.submitter = new ResourceReference(obj.submitter);
            }
            if (obj.payee) {
                this.payee = new ResourceReference(obj.payee);
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.amount) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.DetailsComponent = DetailsComponent;
class NotesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.text) {
                this.text = obj.text;
            }
        }
    }
}
exports.NotesComponent = NotesComponent;
class PaymentReconciliation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PaymentReconciliation';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.requestProvider) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.requestOrganization) {
                this.requestOrganization = new ResourceReference(obj.requestOrganization);
            }
            if (obj.detail) {
                this.detail = [];
                for (let o of obj.detail || []) {
                    this.detail.push(new DetailsComponent(o));
                }
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.total) {
                this.total = new Money(obj.total);
            }
            if (obj.processNote) {
                this.processNote = [];
                for (let o of obj.processNote || []) {
                    this.processNote.push(new NotesComponent(o));
                }
            }
        }
    }
}
exports.PaymentReconciliation = PaymentReconciliation;
class Person extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Person';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.name) {
                this.name = [];
                for (let o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.gender) {
                this.gender = obj.gender;
            }
            if (obj.birthDate) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.address) {
                this.address = [];
                for (let o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.photo) {
                this.photo = new Attachment(obj.photo);
            }
            if (obj.managingOrganization) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
        }
    }
    getDisplayName() {
        if (this.name && this.name.length > 0) {
            return this.name[0].getDisplay();
        }
        return 'Unspecified Name';
    }
}
exports.Person = Person;
class GoalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.description) {
                this.description = new CodeableConcept(obj.description);
            }
            if (obj.priority) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.start) {
                this.start = new CodeableConcept(obj.start);
            }
            if (obj.addresses) {
                this.addresses = [];
                for (let o of obj.addresses || []) {
                    this.addresses.push(new CodeableConcept(o));
                }
            }
            if (obj.documentation) {
                this.documentation = [];
                for (let o of obj.documentation || []) {
                    this.documentation.push(new RelatedArtifact(o));
                }
            }
            if (obj.target) {
                this.target = [];
                for (let o of obj.target || []) {
                    this.target.push(new TargetComponent(o));
                }
            }
        }
    }
}
exports.GoalComponent = GoalComponent;
class TriggerDefinition extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.eventName) {
                this.eventName = obj.eventName;
            }
            if (obj.eventTiming) {
                this.eventTiming = new Element(obj.eventTiming);
            }
            if (obj.eventData) {
                this.eventData = new DataRequirement(obj.eventData);
            }
        }
    }
}
exports.TriggerDefinition = TriggerDefinition;
class RelatedActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.actionId) {
                this.actionId = obj.actionId;
            }
            if (obj.relationship) {
                this.relationship = obj.relationship;
            }
            if (obj.offset) {
                this.offset = new Element(obj.offset);
            }
        }
    }
}
exports.RelatedActionComponent = RelatedActionComponent;
class ActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.label) {
                this.label = obj.label;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.textEquivalent) {
                this.textEquivalent = obj.textEquivalent;
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.documentation) {
                this.documentation = [];
                for (let o of obj.documentation || []) {
                    this.documentation.push(new RelatedArtifact(o));
                }
            }
            if (obj.goalId) {
                this.goalId = obj.goalId;
            }
            if (obj.triggerDefinition) {
                this.triggerDefinition = [];
                for (let o of obj.triggerDefinition || []) {
                    this.triggerDefinition.push(new TriggerDefinition(o));
                }
            }
            if (obj.condition) {
                this.condition = [];
                for (let o of obj.condition || []) {
                    this.condition.push(new ConditionComponent(o));
                }
            }
            if (obj.input) {
                this.input = [];
                for (let o of obj.input || []) {
                    this.input.push(new DataRequirement(o));
                }
            }
            if (obj.output) {
                this.output = [];
                for (let o of obj.output || []) {
                    this.output.push(new DataRequirement(o));
                }
            }
            if (obj.relatedAction) {
                this.relatedAction = [];
                for (let o of obj.relatedAction || []) {
                    this.relatedAction.push(new RelatedActionComponent(o));
                }
            }
            if (obj.timing) {
                this.timing = new Element(obj.timing);
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.type) {
                this.type = new Coding(obj.type);
            }
            if (obj.groupingBehavior) {
                this.groupingBehavior = obj.groupingBehavior;
            }
            if (obj.selectionBehavior) {
                this.selectionBehavior = obj.selectionBehavior;
            }
            if (obj.requiredBehavior) {
                this.requiredBehavior = obj.requiredBehavior;
            }
            if (obj.precheckBehavior) {
                this.precheckBehavior = obj.precheckBehavior;
            }
            if (obj.cardinalityBehavior) {
                this.cardinalityBehavior = obj.cardinalityBehavior;
            }
            if (obj.definition) {
                this.definition = new ResourceReference(obj.definition);
            }
            if (obj.transform) {
                this.transform = new ResourceReference(obj.transform);
            }
            if (obj.dynamicValue) {
                this.dynamicValue = [];
                for (let o of obj.dynamicValue || []) {
                    this.dynamicValue.push(new DynamicValueComponent(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new ActionComponent(o));
                }
            }
        }
    }
}
exports.ActionComponent = ActionComponent;
class PlanDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PlanDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.contributor) {
                this.contributor = [];
                for (let o of obj.contributor || []) {
                    this.contributor.push(new Contributor(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.library) {
                this.library = [];
                for (let o of obj.library || []) {
                    this.library.push(new ResourceReference(o));
                }
            }
            if (obj.goal) {
                this.goal = [];
                for (let o of obj.goal || []) {
                    this.goal.push(new GoalComponent(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new ActionComponent(o));
                }
            }
        }
    }
}
exports.PlanDefinition = PlanDefinition;
class QualificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.issuer) {
                this.issuer = new ResourceReference(obj.issuer);
            }
        }
    }
}
exports.QualificationComponent = QualificationComponent;
class Practitioner extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Practitioner';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.name) {
                this.name = [];
                for (let o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.address) {
                this.address = [];
                for (let o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.gender) {
                this.gender = obj.gender;
            }
            if (obj.birthDate) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.photo) {
                this.photo = [];
                for (let o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.qualification) {
                this.qualification = [];
                for (let o of obj.qualification || []) {
                    this.qualification.push(new QualificationComponent(o));
                }
            }
            if (obj.communication) {
                this.communication = [];
                for (let o of obj.communication || []) {
                    this.communication.push(new CodeableConcept(o));
                }
            }
        }
    }
    getDisplayName() {
        if (this.name && this.name.length > 0) {
            return this.name[0].getDisplay();
        }
        return 'Unspecified Name';
    }
}
exports.Practitioner = Practitioner;
class PractitionerRole extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PractitionerRole';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.practitioner) {
                this.practitioner = new ResourceReference(obj.practitioner);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.specialty) {
                this.specialty = [];
                for (let o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.location) {
                this.location = [];
                for (let o of obj.location || []) {
                    this.location.push(new ResourceReference(o));
                }
            }
            if (obj.healthcareService) {
                this.healthcareService = [];
                for (let o of obj.healthcareService || []) {
                    this.healthcareService.push(new ResourceReference(o));
                }
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.availableTime) {
                this.availableTime = [];
                for (let o of obj.availableTime || []) {
                    this.availableTime.push(new AvailableTimeComponent(o));
                }
            }
            if (obj.notAvailable) {
                this.notAvailable = [];
                for (let o of obj.notAvailable || []) {
                    this.notAvailable.push(new NotAvailableComponent(o));
                }
            }
            if (obj.availabilityExceptions) {
                this.availabilityExceptions = obj.availabilityExceptions;
            }
            if (obj.endpoint) {
                this.endpoint = [];
                for (let o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.PractitionerRole = PractitionerRole;
class FocalDeviceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.action) {
                this.action = new CodeableConcept(obj.action);
            }
            if (obj.manipulated) {
                this.manipulated = new ResourceReference(obj.manipulated);
            }
        }
    }
}
exports.FocalDeviceComponent = FocalDeviceComponent;
class Procedure extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Procedure';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.notDone) {
                this.notDone = obj.notDone;
            }
            if (obj.notDoneReason) {
                this.notDoneReason = new CodeableConcept(obj.notDoneReason);
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.performed) {
                this.performed = new Element(obj.performed);
            }
            if (obj.performer) {
                this.performer = [];
                for (let o of obj.performer || []) {
                    this.performer.push(new PerformerComponent(o));
                }
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = [];
                for (let o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.report) {
                this.report = [];
                for (let o of obj.report || []) {
                    this.report.push(new ResourceReference(o));
                }
            }
            if (obj.complication) {
                this.complication = [];
                for (let o of obj.complication || []) {
                    this.complication.push(new CodeableConcept(o));
                }
            }
            if (obj.complicationDetail) {
                this.complicationDetail = [];
                for (let o of obj.complicationDetail || []) {
                    this.complicationDetail.push(new ResourceReference(o));
                }
            }
            if (obj.followUp) {
                this.followUp = [];
                for (let o of obj.followUp || []) {
                    this.followUp.push(new CodeableConcept(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.focalDevice) {
                this.focalDevice = [];
                for (let o of obj.focalDevice || []) {
                    this.focalDevice.push(new FocalDeviceComponent(o));
                }
            }
            if (obj.usedReference) {
                this.usedReference = [];
                for (let o of obj.usedReference || []) {
                    this.usedReference.push(new ResourceReference(o));
                }
            }
            if (obj.usedCode) {
                this.usedCode = [];
                for (let o of obj.usedCode || []) {
                    this.usedCode.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.Procedure = Procedure;
class ProcedureRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcedureRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.requisition) {
                this.requisition = new Identifier(obj.requisition);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.doNotPerform) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.asNeeded) {
                this.asNeeded = new Element(obj.asNeeded);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.performerType) {
                this.performerType = new CodeableConcept(obj.performerType);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.supportingInfo) {
                this.supportingInfo = [];
                for (let o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.specimen) {
                this.specimen = [];
                for (let o of obj.specimen || []) {
                    this.specimen.push(new ResourceReference(o));
                }
            }
            if (obj.bodySite) {
                this.bodySite = [];
                for (let o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.relevantHistory) {
                this.relevantHistory = [];
                for (let o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ProcedureRequest = ProcedureRequest;
class ItemsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.sequenceLinkId) {
                this.sequenceLinkId = obj.sequenceLinkId;
            }
        }
    }
}
exports.ItemsComponent = ItemsComponent;
class ProcessRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcessRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.action) {
                this.action = obj.action;
            }
            if (obj.target) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.provider) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.response) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.nullify) {
                this.nullify = obj.nullify;
            }
            if (obj.reference) {
                this.reference = obj.reference;
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemsComponent(o));
                }
            }
            if (obj.include) {
                this.include = obj.include;
            }
            if (obj.exclude) {
                this.exclude = obj.exclude;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.ProcessRequest = ProcessRequest;
class ProcessNoteComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.text) {
                this.text = obj.text;
            }
        }
    }
}
exports.ProcessNoteComponent = ProcessNoteComponent;
class ProcessResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcessResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.created) {
                this.created = new Date(obj.created);
            }
            if (obj.organization) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.request) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.disposition) {
                this.disposition = obj.disposition;
            }
            if (obj.requestProvider) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.requestOrganization) {
                this.requestOrganization = new ResourceReference(obj.requestOrganization);
            }
            if (obj.form) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.processNote) {
                this.processNote = [];
                for (let o of obj.processNote || []) {
                    this.processNote.push(new ProcessNoteComponent(o));
                }
            }
            if (obj.error) {
                this.error = [];
                for (let o of obj.error || []) {
                    this.error.push(new CodeableConcept(o));
                }
            }
            if (obj.communicationRequest) {
                this.communicationRequest = [];
                for (let o of obj.communicationRequest || []) {
                    this.communicationRequest.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ProcessResponse = ProcessResponse;
class Provenance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Provenance';
        if (obj) {
            if (obj.target) {
                this.target = [];
                for (let o of obj.target || []) {
                    this.target.push(new ResourceReference(o));
                }
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.recorded) {
                this.recorded = new Date(obj.recorded);
            }
            if (obj.policy) {
                this.policy = obj.policy;
            }
            if (obj.location) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.reason) {
                this.reason = [];
                for (let o of obj.reason || []) {
                    this.reason.push(new Coding(o));
                }
            }
            if (obj.activity) {
                this.activity = new Coding(obj.activity);
            }
            if (obj.agent) {
                this.agent = [];
                for (let o of obj.agent || []) {
                    this.agent.push(new AgentComponent(o));
                }
            }
            if (obj.entity) {
                this.entity = [];
                for (let o of obj.entity || []) {
                    this.entity.push(new EntityComponent(o));
                }
            }
            if (obj.signature) {
                this.signature = [];
                for (let o of obj.signature || []) {
                    this.signature.push(new Signature(o));
                }
            }
        }
    }
}
exports.Provenance = Provenance;
class QuestionnaireItemEnableWhenComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        Object.assign(this, obj);
        if (obj) {
            if (obj.question) {
                this.question = obj.question;
            }
            if (obj.hasOwnProperty('hasAnswer')) {
                this.hasAnswer = obj.hasAnswer;
            }
            if (obj.hasOwnProperty('answerBoolean')) {
                this.answerBoolean = obj.answerBoolean;
            }
            if (obj.hasOwnProperty('answerDecimal')) {
                this.answerDecimal = obj.answerDecimal;
            }
            if (obj.hasOwnProperty('answerInteger')) {
                this.answerInteger = obj.answerInteger;
            }
            if (obj.answerDate) {
                this.answerDate = obj.answerDate;
            }
            if (obj.answerDateTime) {
                this.answerDateTime = obj.answerDateTime;
            }
            if (obj.answerTime) {
                this.answerTime = obj.answerTime;
            }
            if (obj.answerUri) {
                this.answerUri = obj.answerUri;
            }
            if (obj.answerString) {
                this.answerString = obj.answerString;
            }
            if (obj.answerAttachment) {
                this.answerAttachment = new Attachment(obj.answerAttachment);
            }
            if (obj.answerCoding) {
                this.answerCoding = new Coding(obj.answerCoding);
            }
            if (obj.answerQuantity) {
                this.answerQuantity = new Quantity(obj.answerQuantity);
            }
            if (obj.answerReference) {
                this.answerReference = new ResourceReference(obj.answerReference);
            }
        }
    }
}
exports.QuestionnaireItemEnableWhenComponent = QuestionnaireItemEnableWhenComponent;
class QuestionnaireItemOptionComponent extends BackboneElement {
}
exports.QuestionnaireItemOptionComponent = QuestionnaireItemOptionComponent;
class QuestionnaireItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.linkId) {
                this.linkId = obj.linkId;
            }
            if (obj.definition) {
                this.definition = obj.definition;
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.prefix) {
                this.prefix = obj.prefix;
            }
            if (obj.text) {
                this.text = obj.text;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('maxLength')) {
                this.maxLength = obj.maxLength;
            }
            if (obj.hasOwnProperty('options')) {
                this.options = new ResourceReference(obj.options);
            }
            if (obj.hasOwnProperty('option')) {
                this.option = [];
                for (let o of obj.option || []) {
                    this.option.push(new QuestionnaireItemOptionComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireItemComponent = QuestionnaireItemComponent;
class Questionnaire extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Questionnaire';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.code) {
                this.code = [];
                for (let o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.subjectType) {
                this.subjectType = obj.subjectType;
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new QuestionnaireItemComponent(o));
                }
            }
        }
    }
}
exports.Questionnaire = Questionnaire;
class QuestionnaireResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'QuestionnaireResponse';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.parent) {
                this.parent = [];
                for (let o of obj.parent || []) {
                    this.parent.push(new ResourceReference(o));
                }
            }
            if (obj.questionnaire) {
                this.questionnaire = new ResourceReference(obj.questionnaire);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.authored) {
                this.authored = new Date(obj.authored);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.source) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.item) {
                this.item = [];
                for (let o of obj.item || []) {
                    this.item.push(new ItemComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireResponse = QuestionnaireResponse;
class ReferralRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ReferralRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.serviceRequested) {
                this.serviceRequested = [];
                for (let o of obj.serviceRequested || []) {
                    this.serviceRequested.push(new CodeableConcept(o));
                }
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.specialty) {
                this.specialty = new CodeableConcept(obj.specialty);
            }
            if (obj.recipient) {
                this.recipient = [];
                for (let o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.reasonCode) {
                this.reasonCode = [];
                for (let o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.reasonReference) {
                this.reasonReference = [];
                for (let o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.supportingInfo) {
                this.supportingInfo = [];
                for (let o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.relevantHistory) {
                this.relevantHistory = [];
                for (let o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ReferralRequest = ReferralRequest;
class RelatedPerson extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RelatedPerson';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.relationship) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.name) {
                this.name = [];
                for (let o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.telecom) {
                this.telecom = [];
                for (let o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.gender) {
                this.gender = obj.gender;
            }
            if (obj.birthDate) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.address) {
                this.address = [];
                for (let o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.photo) {
                this.photo = [];
                for (let o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.RelatedPerson = RelatedPerson;
class RequestGroup extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RequestGroup';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = [];
                for (let o of obj.definition || []) {
                    this.definition.push(new ResourceReference(o));
                }
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.replaces) {
                this.replaces = [];
                for (let o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.author) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.reason) {
                this.reason = new Element(obj.reason);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new ActionComponent(o));
                }
            }
        }
    }
}
exports.RequestGroup = RequestGroup;
class ArmComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.description) {
                this.description = obj.description;
            }
        }
    }
}
exports.ArmComponent = ArmComponent;
class ResearchStudy extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ResearchStudy';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.protocol) {
                this.protocol = [];
                for (let o of obj.protocol || []) {
                    this.protocol.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.focus) {
                this.focus = [];
                for (let o of obj.focus || []) {
                    this.focus.push(new CodeableConcept(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.keyword) {
                this.keyword = [];
                for (let o of obj.keyword || []) {
                    this.keyword.push(new CodeableConcept(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.enrollment) {
                this.enrollment = [];
                for (let o of obj.enrollment || []) {
                    this.enrollment.push(new ResourceReference(o));
                }
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.sponsor) {
                this.sponsor = new ResourceReference(obj.sponsor);
            }
            if (obj.principalInvestigator) {
                this.principalInvestigator = new ResourceReference(obj.principalInvestigator);
            }
            if (obj.site) {
                this.site = [];
                for (let o of obj.site || []) {
                    this.site.push(new ResourceReference(o));
                }
            }
            if (obj.reasonStopped) {
                this.reasonStopped = new CodeableConcept(obj.reasonStopped);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.arm) {
                this.arm = [];
                for (let o of obj.arm || []) {
                    this.arm.push(new ArmComponent(o));
                }
            }
        }
    }
}
exports.ResearchStudy = ResearchStudy;
class ResearchSubject extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ResearchSubject';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.study) {
                this.study = new ResourceReference(obj.study);
            }
            if (obj.individual) {
                this.individual = new ResourceReference(obj.individual);
            }
            if (obj.assignedArm) {
                this.assignedArm = obj.assignedArm;
            }
            if (obj.actualArm) {
                this.actualArm = obj.actualArm;
            }
            if (obj.consent) {
                this.consent = new ResourceReference(obj.consent);
            }
        }
    }
}
exports.ResearchSubject = ResearchSubject;
class PredictionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.outcome) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.probability) {
                this.probability = new Element(obj.probability);
            }
            if (obj.qualitativeRisk) {
                this.qualitativeRisk = new CodeableConcept(obj.qualitativeRisk);
            }
            if (obj.relativeRisk) {
                this.relativeRisk = obj.relativeRisk;
            }
            if (obj.when) {
                this.when = new Element(obj.when);
            }
            if (obj.rationale) {
                this.rationale = obj.rationale;
            }
        }
    }
}
exports.PredictionComponent = PredictionComponent;
class RiskAssessment extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RiskAssessment';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.basedOn) {
                this.basedOn = new ResourceReference(obj.basedOn);
            }
            if (obj.parent) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.condition) {
                this.condition = new ResourceReference(obj.condition);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.reason) {
                this.reason = new Element(obj.reason);
            }
            if (obj.basis) {
                this.basis = [];
                for (let o of obj.basis || []) {
                    this.basis.push(new ResourceReference(o));
                }
            }
            if (obj.prediction) {
                this.prediction = [];
                for (let o of obj.prediction || []) {
                    this.prediction.push(new PredictionComponent(o));
                }
            }
            if (obj.mitigation) {
                this.mitigation = obj.mitigation;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.RiskAssessment = RiskAssessment;
class SampledData extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.origin) {
                this.origin = new Quantity(obj.origin);
            }
            if (obj.period) {
                this.period = obj.period;
            }
            if (obj.factor) {
                this.factor = obj.factor;
            }
            if (obj.lowerLimit) {
                this.lowerLimit = obj.lowerLimit;
            }
            if (obj.upperLimit) {
                this.upperLimit = obj.upperLimit;
            }
            if (obj.dimensions) {
                this.dimensions = obj.dimensions;
            }
            if (obj.data) {
                this.data = obj.data;
            }
        }
    }
}
exports.SampledData = SampledData;
class Schedule extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Schedule';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.active) {
                this.active = obj.active;
            }
            if (obj.serviceCategory) {
                this.serviceCategory = new CodeableConcept(obj.serviceCategory);
            }
            if (obj.serviceType) {
                this.serviceType = [];
                for (let o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.specialty) {
                this.specialty = [];
                for (let o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.actor) {
                this.actor = [];
                for (let o of obj.actor || []) {
                    this.actor.push(new ResourceReference(o));
                }
            }
            if (obj.planningHorizon) {
                this.planningHorizon = new Period(obj.planningHorizon);
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.Schedule = Schedule;
class SearchParameter extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SearchParameter';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.base) {
                this.base = obj.base;
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.derivedFrom) {
                this.derivedFrom = obj.derivedFrom;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.expression) {
                this.expression = obj.expression;
            }
            if (obj.xpath) {
                this.xpath = obj.xpath;
            }
            if (obj.xpathUsage) {
                this.xpathUsage = obj.xpathUsage;
            }
            if (obj.target) {
                this.target = obj.target;
            }
            if (obj.comparator) {
                this.comparator = obj.comparator;
            }
            if (obj.modifier) {
                this.modifier = obj.modifier;
            }
            if (obj.chain) {
                this.chain = obj.chain;
            }
            if (obj.component) {
                this.component = [];
                for (let o of obj.component || []) {
                    this.component.push(new ComponentComponent(o));
                }
            }
        }
    }
}
exports.SearchParameter = SearchParameter;
class ReferenceSeqComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.chromosome) {
                this.chromosome = new CodeableConcept(obj.chromosome);
            }
            if (obj.genomeBuild) {
                this.genomeBuild = obj.genomeBuild;
            }
            if (obj.referenceSeqId) {
                this.referenceSeqId = new CodeableConcept(obj.referenceSeqId);
            }
            if (obj.referenceSeqPointer) {
                this.referenceSeqPointer = new ResourceReference(obj.referenceSeqPointer);
            }
            if (obj.referenceSeqString) {
                this.referenceSeqString = obj.referenceSeqString;
            }
            if (obj.strand) {
                this.strand = obj.strand;
            }
            if (obj.windowStart) {
                this.windowStart = obj.windowStart;
            }
            if (obj.windowEnd) {
                this.windowEnd = obj.windowEnd;
            }
        }
    }
}
exports.ReferenceSeqComponent = ReferenceSeqComponent;
class VariantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.start) {
                this.start = obj.start;
            }
            if (obj.end) {
                this.end = obj.end;
            }
            if (obj.observedAllele) {
                this.observedAllele = obj.observedAllele;
            }
            if (obj.referenceAllele) {
                this.referenceAllele = obj.referenceAllele;
            }
            if (obj.cigar) {
                this.cigar = obj.cigar;
            }
            if (obj.variantPointer) {
                this.variantPointer = new ResourceReference(obj.variantPointer);
            }
        }
    }
}
exports.VariantComponent = VariantComponent;
class QualityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.standardSequence) {
                this.standardSequence = new CodeableConcept(obj.standardSequence);
            }
            if (obj.start) {
                this.start = obj.start;
            }
            if (obj.end) {
                this.end = obj.end;
            }
            if (obj.score) {
                this.score = new Quantity(obj.score);
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.truthTP) {
                this.truthTP = obj.truthTP;
            }
            if (obj.queryTP) {
                this.queryTP = obj.queryTP;
            }
            if (obj.truthFN) {
                this.truthFN = obj.truthFN;
            }
            if (obj.queryFP) {
                this.queryFP = obj.queryFP;
            }
            if (obj.gtFP) {
                this.gtFP = obj.gtFP;
            }
            if (obj.precision) {
                this.precision = obj.precision;
            }
            if (obj.recall) {
                this.recall = obj.recall;
            }
            if (obj.fScore) {
                this.fScore = obj.fScore;
            }
        }
    }
}
exports.QualityComponent = QualityComponent;
class RepositoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.datasetId) {
                this.datasetId = obj.datasetId;
            }
            if (obj.variantsetId) {
                this.variantsetId = obj.variantsetId;
            }
            if (obj.readsetId) {
                this.readsetId = obj.readsetId;
            }
        }
    }
}
exports.RepositoryComponent = RepositoryComponent;
class Sequence extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Sequence';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.coordinateSystem) {
                this.coordinateSystem = obj.coordinateSystem;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.specimen) {
                this.specimen = new ResourceReference(obj.specimen);
            }
            if (obj.device) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.performer) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.quantity) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.referenceSeq) {
                this.referenceSeq = new ReferenceSeqComponent(obj.referenceSeq);
            }
            if (obj.variant) {
                this.variant = [];
                for (let o of obj.variant || []) {
                    this.variant.push(new VariantComponent(o));
                }
            }
            if (obj.observedSeq) {
                this.observedSeq = obj.observedSeq;
            }
            if (obj.quality) {
                this.quality = [];
                for (let o of obj.quality || []) {
                    this.quality.push(new QualityComponent(o));
                }
            }
            if (obj.readCoverage) {
                this.readCoverage = obj.readCoverage;
            }
            if (obj.repository) {
                this.repository = [];
                for (let o of obj.repository || []) {
                    this.repository.push(new RepositoryComponent(o));
                }
            }
            if (obj.pointer) {
                this.pointer = [];
                for (let o of obj.pointer || []) {
                    this.pointer.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Sequence = Sequence;
class ServiceDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ServiceDefinition';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.usage) {
                this.usage = obj.usage;
            }
            if (obj.approvalDate) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.lastReviewDate) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.effectivePeriod) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.topic) {
                this.topic = [];
                for (let o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.contributor) {
                this.contributor = [];
                for (let o of obj.contributor || []) {
                    this.contributor.push(new Contributor(o));
                }
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.relatedArtifact) {
                this.relatedArtifact = [];
                for (let o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.trigger) {
                this.trigger = [];
                for (let o of obj.trigger || []) {
                    this.trigger.push(new TriggerDefinition(o));
                }
            }
            if (obj.dataRequirement) {
                this.dataRequirement = [];
                for (let o of obj.dataRequirement || []) {
                    this.dataRequirement.push(new DataRequirement(o));
                }
            }
            if (obj.operationDefinition) {
                this.operationDefinition = new ResourceReference(obj.operationDefinition);
            }
        }
    }
}
exports.ServiceDefinition = ServiceDefinition;
class Slot extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Slot';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.serviceCategory) {
                this.serviceCategory = new CodeableConcept(obj.serviceCategory);
            }
            if (obj.serviceType) {
                this.serviceType = [];
                for (let o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.specialty) {
                this.specialty = [];
                for (let o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.appointmentType) {
                this.appointmentType = new CodeableConcept(obj.appointmentType);
            }
            if (obj.schedule) {
                this.schedule = new ResourceReference(obj.schedule);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.start) {
                this.start = new Date(obj.start);
            }
            if (obj.end) {
                this.end = new Date(obj.end);
            }
            if (obj.overbooked) {
                this.overbooked = obj.overbooked;
            }
            if (obj.comment) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.Slot = Slot;
class CollectionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.collector) {
                this.collector = new ResourceReference(obj.collector);
            }
            if (obj.collected) {
                this.collected = new Element(obj.collected);
            }
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.method) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.bodySite) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
        }
    }
}
exports.CollectionComponent = CollectionComponent;
class ProcessingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.procedure) {
                this.procedure = new CodeableConcept(obj.procedure);
            }
            if (obj.additive) {
                this.additive = [];
                for (let o of obj.additive || []) {
                    this.additive.push(new ResourceReference(o));
                }
            }
            if (obj.time) {
                this.time = new Element(obj.time);
            }
        }
    }
}
exports.ProcessingComponent = ProcessingComponent;
class ContainerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.capacity) {
                this.capacity = new SimpleQuantity(obj.capacity);
            }
            if (obj.specimenQuantity) {
                this.specimenQuantity = new SimpleQuantity(obj.specimenQuantity);
            }
            if (obj.additive) {
                this.additive = new Element(obj.additive);
            }
        }
    }
}
exports.ContainerComponent = ContainerComponent;
class Specimen extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Specimen';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.accessionIdentifier) {
                this.accessionIdentifier = new Identifier(obj.accessionIdentifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.subject) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.receivedTime) {
                this.receivedTime = new Date(obj.receivedTime);
            }
            if (obj.parent) {
                this.parent = [];
                for (let o of obj.parent || []) {
                    this.parent.push(new ResourceReference(o));
                }
            }
            if (obj.request) {
                this.request = [];
                for (let o of obj.request || []) {
                    this.request.push(new ResourceReference(o));
                }
            }
            if (obj.collection) {
                this.collection = new CollectionComponent(obj.collection);
            }
            if (obj.processing) {
                this.processing = [];
                for (let o of obj.processing || []) {
                    this.processing.push(new ProcessingComponent(o));
                }
            }
            if (obj.container) {
                this.container = [];
                for (let o of obj.container || []) {
                    this.container.push(new ContainerComponent(o));
                }
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Specimen = Specimen;
class StructureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.mode) {
                this.mode = obj.mode;
            }
            if (obj.alias) {
                this.alias = obj.alias;
            }
            if (obj.documentation) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.StructureComponent = StructureComponent;
class StructureMap extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'StructureMap';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.structure) {
                this.structure = [];
                for (let o of obj.structure || []) {
                    this.structure.push(new StructureComponent(o));
                }
            }
            if (obj.import) {
                this.import = obj.import;
            }
            if (obj.group) {
                this.group = [];
                for (let o of obj.group || []) {
                    this.group.push(new GroupComponent(o));
                }
            }
        }
    }
}
exports.StructureMap = StructureMap;
class ChannelComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = obj.type;
            }
            if (obj.endpoint) {
                this.endpoint = obj.endpoint;
            }
            if (obj.payload) {
                this.payload = obj.payload;
            }
            if (obj.header) {
                this.header = obj.header;
            }
        }
    }
}
exports.ChannelComponent = ChannelComponent;
class Subscription extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Subscription';
        if (obj) {
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.end) {
                this.end = new Date(obj.end);
            }
            if (obj.reason) {
                this.reason = obj.reason;
            }
            if (obj.criteria) {
                this.criteria = obj.criteria;
            }
            if (obj.error) {
                this.error = obj.error;
            }
            if (obj.channel) {
                this.channel = new ChannelComponent(obj.channel);
            }
            if (obj.tag) {
                this.tag = [];
                for (let o of obj.tag || []) {
                    this.tag.push(new Coding(o));
                }
            }
        }
    }
}
exports.Subscription = Subscription;
class Substance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Substance';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = [];
                for (let o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.instance) {
                this.instance = [];
                for (let o of obj.instance || []) {
                    this.instance.push(new InstanceComponent(o));
                }
            }
            if (obj.ingredient) {
                this.ingredient = [];
                for (let o of obj.ingredient || []) {
                    this.ingredient.push(new IngredientComponent(o));
                }
            }
        }
    }
}
exports.Substance = Substance;
class SuppliedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.quantity) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.item) {
                this.item = new Element(obj.item);
            }
        }
    }
}
exports.SuppliedItemComponent = SuppliedItemComponent;
class SupplyDelivery extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SupplyDelivery';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.suppliedItem) {
                this.suppliedItem = new SuppliedItemComponent(obj.suppliedItem);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.supplier) {
                this.supplier = new ResourceReference(obj.supplier);
            }
            if (obj.destination) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.receiver) {
                this.receiver = [];
                for (let o of obj.receiver || []) {
                    this.receiver.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SupplyDelivery = SupplyDelivery;
class OrderedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.quantity) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.item) {
                this.item = new Element(obj.item);
            }
        }
    }
}
exports.OrderedItemComponent = OrderedItemComponent;
class SupplyRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SupplyRequest';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.category) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.orderedItem) {
                this.orderedItem = new OrderedItemComponent(obj.orderedItem);
            }
            if (obj.occurrence) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.supplier) {
                this.supplier = [];
                for (let o of obj.supplier || []) {
                    this.supplier.push(new ResourceReference(o));
                }
            }
            if (obj.reason) {
                this.reason = new Element(obj.reason);
            }
            if (obj.deliverFrom) {
                this.deliverFrom = new ResourceReference(obj.deliverFrom);
            }
            if (obj.deliverTo) {
                this.deliverTo = new ResourceReference(obj.deliverTo);
            }
        }
    }
}
exports.SupplyRequest = SupplyRequest;
class RestrictionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.repetitions) {
                this.repetitions = obj.repetitions;
            }
            if (obj.period) {
                this.period = new Period(obj.period);
            }
            if (obj.recipient) {
                this.recipient = [];
                for (let o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.RestrictionComponent = RestrictionComponent;
class OutputComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.type) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.value) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.OutputComponent = OutputComponent;
class Task extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Task';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.definition) {
                this.definition = new Element(obj.definition);
            }
            if (obj.basedOn) {
                this.basedOn = [];
                for (let o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.groupIdentifier) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.partOf) {
                this.partOf = [];
                for (let o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.statusReason) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.businessStatus) {
                this.businessStatus = new CodeableConcept(obj.businessStatus);
            }
            if (obj.intent) {
                this.intent = obj.intent;
            }
            if (obj.priority) {
                this.priority = obj.priority;
            }
            if (obj.code) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.focus) {
                this.focus = new ResourceReference(obj.focus);
            }
            if (obj.for) {
                this.for = new ResourceReference(obj.for);
            }
            if (obj.context) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.executionPeriod) {
                this.executionPeriod = new Period(obj.executionPeriod);
            }
            if (obj.authoredOn) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.lastModified) {
                this.lastModified = new Date(obj.lastModified);
            }
            if (obj.requester) {
                this.requester = new RequesterComponent(obj.requester);
            }
            if (obj.performerType) {
                this.performerType = [];
                for (let o of obj.performerType || []) {
                    this.performerType.push(new CodeableConcept(o));
                }
            }
            if (obj.owner) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.reason) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.relevantHistory) {
                this.relevantHistory = [];
                for (let o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
            if (obj.restriction) {
                this.restriction = new RestrictionComponent(obj.restriction);
            }
            if (obj.input) {
                this.input = [];
                for (let o of obj.input || []) {
                    this.input.push(new ParameterComponent(o));
                }
            }
            if (obj.output) {
                this.output = [];
                for (let o of obj.output || []) {
                    this.output.push(new OutputComponent(o));
                }
            }
        }
    }
}
exports.Task = Task;
class ModelInfo {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.ModelInfo = ModelInfo;
class AssertComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.result) {
                this.result = obj.result;
            }
            if (obj.message) {
                this.message = obj.message;
            }
            if (obj.detail) {
                this.detail = obj.detail;
            }
        }
    }
}
exports.AssertComponent = AssertComponent;
class SetupActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.operation) {
                this.operation = new OperationComponent(obj.operation);
            }
            if (obj.assert) {
                this.assert = new AssertComponent(obj.assert);
            }
        }
    }
}
exports.SetupActionComponent = SetupActionComponent;
class SetupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new SetupActionComponent(o));
                }
            }
        }
    }
}
exports.SetupComponent = SetupComponent;
class TestActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.operation) {
                this.operation = new OperationComponent(obj.operation);
            }
            if (obj.assert) {
                this.assert = new AssertComponent(obj.assert);
            }
        }
    }
}
exports.TestActionComponent = TestActionComponent;
class TestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new TestActionComponent(o));
                }
            }
        }
    }
}
exports.TestComponent = TestComponent;
class TeardownActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.operation) {
                this.operation = new OperationComponent(obj.operation);
            }
        }
    }
}
exports.TeardownActionComponent = TeardownActionComponent;
class TeardownComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.action) {
                this.action = [];
                for (let o of obj.action || []) {
                    this.action.push(new TeardownActionComponent(o));
                }
            }
        }
    }
}
exports.TeardownComponent = TeardownComponent;
class TestReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'TestReport';
        if (obj) {
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.testScript) {
                this.testScript = new ResourceReference(obj.testScript);
            }
            if (obj.result) {
                this.result = obj.result;
            }
            if (obj.score) {
                this.score = obj.score;
            }
            if (obj.tester) {
                this.tester = obj.tester;
            }
            if (obj.issued) {
                this.issued = new Date(obj.issued);
            }
            if (obj.participant) {
                this.participant = [];
                for (let o of obj.participant || []) {
                    this.participant.push(new ParticipantComponent(o));
                }
            }
            if (obj.setup) {
                this.setup = new SetupComponent(obj.setup);
            }
            if (obj.test) {
                this.test = [];
                for (let o of obj.test || []) {
                    this.test.push(new TestComponent(o));
                }
            }
            if (obj.teardown) {
                this.teardown = new TeardownComponent(obj.teardown);
            }
        }
    }
}
exports.TestReport = TestReport;
class OriginComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.index) {
                this.index = obj.index;
            }
            if (obj.profile) {
                this.profile = new Coding(obj.profile);
            }
        }
    }
}
exports.OriginComponent = OriginComponent;
class DestinationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.index) {
                this.index = obj.index;
            }
            if (obj.profile) {
                this.profile = new Coding(obj.profile);
            }
        }
    }
}
exports.DestinationComponent = DestinationComponent;
class CapabilityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.required) {
                this.required = obj.required;
            }
            if (obj.validated) {
                this.validated = obj.validated;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.origin) {
                this.origin = obj.origin;
            }
            if (obj.destination) {
                this.destination = obj.destination;
            }
            if (obj.link) {
                this.link = obj.link;
            }
            if (obj.capabilities) {
                this.capabilities = new ResourceReference(obj.capabilities);
            }
        }
    }
}
exports.CapabilityComponent = CapabilityComponent;
class MetadataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.link) {
                this.link = [];
                for (let o of obj.link || []) {
                    this.link.push(new LinkComponent(o));
                }
            }
            if (obj.capability) {
                this.capability = [];
                for (let o of obj.capability || []) {
                    this.capability.push(new CapabilityComponent(o));
                }
            }
        }
    }
}
exports.MetadataComponent = MetadataComponent;
class FixtureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.autocreate) {
                this.autocreate = obj.autocreate;
            }
            if (obj.autodelete) {
                this.autodelete = obj.autodelete;
            }
            if (obj.resource) {
                this.resource = new ResourceReference(obj.resource);
            }
        }
    }
}
exports.FixtureComponent = FixtureComponent;
class VariableComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.defaultValue) {
                this.defaultValue = obj.defaultValue;
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.expression) {
                this.expression = obj.expression;
            }
            if (obj.headerField) {
                this.headerField = obj.headerField;
            }
            if (obj.hint) {
                this.hint = obj.hint;
            }
            if (obj.path) {
                this.path = obj.path;
            }
            if (obj.sourceId) {
                this.sourceId = obj.sourceId;
            }
        }
    }
}
exports.VariableComponent = VariableComponent;
class RuleParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.RuleParamComponent = RuleParamComponent;
class RuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.resource) {
                this.resource = new ResourceReference(obj.resource);
            }
            if (obj.param) {
                this.param = [];
                for (let o of obj.param || []) {
                    this.param.push(new RuleParamComponent(o));
                }
            }
        }
    }
}
exports.RuleComponent = RuleComponent;
class RulesetRuleParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.value) {
                this.value = obj.value;
            }
        }
    }
}
exports.RulesetRuleParamComponent = RulesetRuleParamComponent;
class RulesetRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.ruleId) {
                this.ruleId = obj.ruleId;
            }
            if (obj.param) {
                this.param = [];
                for (let o of obj.param || []) {
                    this.param.push(new RulesetRuleParamComponent(o));
                }
            }
        }
    }
}
exports.RulesetRuleComponent = RulesetRuleComponent;
class RulesetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.resource) {
                this.resource = new ResourceReference(obj.resource);
            }
            if (obj.rule) {
                this.rule = [];
                for (let o of obj.rule || []) {
                    this.rule.push(new RulesetRuleComponent(o));
                }
            }
        }
    }
}
exports.RulesetComponent = RulesetComponent;
class TestScript extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'TestScript';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.origin) {
                this.origin = [];
                for (let o of obj.origin || []) {
                    this.origin.push(new OriginComponent(o));
                }
            }
            if (obj.destination) {
                this.destination = [];
                for (let o of obj.destination || []) {
                    this.destination.push(new DestinationComponent(o));
                }
            }
            if (obj.metadata) {
                this.metadata = new MetadataComponent(obj.metadata);
            }
            if (obj.fixture) {
                this.fixture = [];
                for (let o of obj.fixture || []) {
                    this.fixture.push(new FixtureComponent(o));
                }
            }
            if (obj.profile) {
                this.profile = [];
                for (let o of obj.profile || []) {
                    this.profile.push(new ResourceReference(o));
                }
            }
            if (obj.variable) {
                this.variable = [];
                for (let o of obj.variable || []) {
                    this.variable.push(new VariableComponent(o));
                }
            }
            if (obj.rule) {
                this.rule = [];
                for (let o of obj.rule || []) {
                    this.rule.push(new RuleComponent(o));
                }
            }
            if (obj.ruleset) {
                this.ruleset = [];
                for (let o of obj.ruleset || []) {
                    this.ruleset.push(new RulesetComponent(o));
                }
            }
            if (obj.setup) {
                this.setup = new SetupComponent(obj.setup);
            }
            if (obj.test) {
                this.test = [];
                for (let o of obj.test || []) {
                    this.test.push(new TestComponent(o));
                }
            }
            if (obj.teardown) {
                this.teardown = new TeardownComponent(obj.teardown);
            }
        }
    }
}
exports.TestScript = TestScript;
class ConceptReferenceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.designation) {
                this.designation = [];
                for (let o of obj.designation || []) {
                    this.designation.push(new DesignationComponent(o));
                }
            }
        }
    }
}
exports.ConceptReferenceComponent = ConceptReferenceComponent;
class ConceptSetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.concept) {
                this.concept = [];
                for (let o of obj.concept || []) {
                    this.concept.push(new ConceptReferenceComponent(o));
                }
            }
            if (obj.filter) {
                this.filter = [];
                for (let o of obj.filter || []) {
                    this.filter.push(new FilterComponent(o));
                }
            }
            if (obj.valueSet) {
                this.valueSet = obj.valueSet;
            }
        }
    }
}
exports.ConceptSetComponent = ConceptSetComponent;
class ComposeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.lockedDate) {
                this.lockedDate = new Date(obj.lockedDate);
            }
            if (obj.inactive) {
                this.inactive = obj.inactive;
            }
            if (obj.include) {
                this.include = [];
                for (let o of obj.include || []) {
                    this.include.push(new ConceptSetComponent(o));
                }
            }
            if (obj.exclude) {
                this.exclude = [];
                for (let o of obj.exclude || []) {
                    this.exclude.push(new ConceptSetComponent(o));
                }
            }
        }
    }
}
exports.ComposeComponent = ComposeComponent;
class ContainsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.system) {
                this.system = obj.system;
            }
            if (obj.abstract) {
                this.abstract = obj.abstract;
            }
            if (obj.inactive) {
                this.inactive = obj.inactive;
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.code) {
                this.code = obj.code;
            }
            if (obj.display) {
                this.display = obj.display;
            }
            if (obj.designation) {
                this.designation = [];
                for (let o of obj.designation || []) {
                    this.designation.push(new DesignationComponent(o));
                }
            }
            if (obj.contains) {
                this.contains = [];
                for (let o of obj.contains || []) {
                    this.contains.push(new ContainsComponent(o));
                }
            }
        }
    }
}
exports.ContainsComponent = ContainsComponent;
class ExpansionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.identifier) {
                this.identifier = obj.identifier;
            }
            if (obj.timestamp) {
                this.timestamp = new Date(obj.timestamp);
            }
            if (obj.total) {
                this.total = obj.total;
            }
            if (obj.offset) {
                this.offset = obj.offset;
            }
            if (obj.parameter) {
                this.parameter = [];
                for (let o of obj.parameter || []) {
                    this.parameter.push(new ParameterComponent(o));
                }
            }
            if (obj.contains) {
                this.contains = [];
                for (let o of obj.contains || []) {
                    this.contains.push(new ContainsComponent(o));
                }
            }
        }
    }
}
exports.ExpansionComponent = ExpansionComponent;
class ValueSet extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ValueSet';
        this.status = 'draft';
        if (obj) {
            if (obj.url) {
                this.url = obj.url;
            }
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.version) {
                this.version = obj.version;
            }
            if (obj.name) {
                this.name = obj.name;
            }
            if (obj.title) {
                this.title = obj.title;
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.experimental) {
                this.experimental = obj.experimental;
            }
            if (obj.date) {
                this.date = new Date(obj.date);
            }
            if (obj.publisher) {
                this.publisher = obj.publisher;
            }
            if (obj.contact) {
                this.contact = [];
                for (let o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.description) {
                this.description = obj.description;
            }
            if (obj.useContext) {
                this.useContext = [];
                for (let o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.jurisdiction) {
                this.jurisdiction = [];
                for (let o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.immutable) {
                this.immutable = obj.immutable;
            }
            if (obj.purpose) {
                this.purpose = obj.purpose;
            }
            if (obj.copyright) {
                this.copyright = obj.copyright;
            }
            if (obj.extensible) {
                this.extensible = obj.extensible;
            }
            if (obj.compose) {
                this.compose = new ComposeComponent(obj.compose);
            }
            if (obj.expansion) {
                this.expansion = new ExpansionComponent(obj.expansion);
            }
        }
    }
}
exports.ValueSet = ValueSet;
class DispenseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.product) {
                this.product = new CodeableConcept(obj.product);
            }
            if (obj.eye) {
                this.eye = obj.eye;
            }
            if (obj.sphere) {
                this.sphere = obj.sphere;
            }
            if (obj.cylinder) {
                this.cylinder = obj.cylinder;
            }
            if (obj.axis) {
                this.axis = obj.axis;
            }
            if (obj.prism) {
                this.prism = obj.prism;
            }
            if (obj.base) {
                this.base = obj.base;
            }
            if (obj.add) {
                this.add = obj.add;
            }
            if (obj.power) {
                this.power = obj.power;
            }
            if (obj.backCurve) {
                this.backCurve = obj.backCurve;
            }
            if (obj.diameter) {
                this.diameter = obj.diameter;
            }
            if (obj.duration) {
                this.duration = new SimpleQuantity(obj.duration);
            }
            if (obj.color) {
                this.color = obj.color;
            }
            if (obj.brand) {
                this.brand = obj.brand;
            }
            if (obj.note) {
                this.note = [];
                for (let o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.DispenseComponent = DispenseComponent;
class VisionPrescription extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'VisionPrescription';
        if (obj) {
            if (obj.identifier) {
                this.identifier = [];
                for (let o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.status) {
                this.status = obj.status;
            }
            if (obj.patient) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.encounter) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.dateWritten) {
                this.dateWritten = new Date(obj.dateWritten);
            }
            if (obj.prescriber) {
                this.prescriber = new ResourceReference(obj.prescriber);
            }
            if (obj.reason) {
                this.reason = new Element(obj.reason);
            }
            if (obj.dispense) {
                this.dispense = [];
                for (let o of obj.dispense || []) {
                    this.dispense.push(new DispenseComponent(o));
                }
            }
        }
    }
}
exports.VisionPrescription = VisionPrescription;