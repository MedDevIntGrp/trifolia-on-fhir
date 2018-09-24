import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ValueSetService} from '../services/value-set.service';
import {OperationOutcome, ValueSet} from '../models/stu3/fhir';
import {Globals} from '../globals';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

interface ValueSetExpandCriteria {
    filter?: string;
    profile?: string;
    date?: string;
    offset?: number;
    count?: number;
    includeDesignations?: boolean;
    includeDefinition?: boolean;
    activeOnly?: boolean;
    excludeNested?: boolean;
    excludeNotForUI?: boolean;
    excludePostCoordinated?: boolean;
    displayLanguage?: string;
    limitedExpansion?: boolean;
}

@Component({
    selector: 'app-valueset-expand',
    templateUrl: './valueset-expand.component.html',
    styleUrls: ['./valueset-expand.component.css']
})
export class ValuesetExpandComponent implements OnInit {
    public valueSet: ValueSet;
    public results: ValueSet | OperationOutcome;
    public criteria: ValueSetExpandCriteria = {};
    public message: string;
    public expanding = false;

    constructor(
        private route: ActivatedRoute,
        private valueSetService: ValueSetService,
        public globals: Globals) {
    }

    public expand(tabSet: NgbTabset) {
        this.expanding = true;
        this.message = 'Expanding... This may take a while.';

        const valueSetId = this.route.snapshot.paramMap.get('id');
        this.valueSetService.expand(valueSetId)
            .subscribe((results) => {
                this.results = results;
                setTimeout(() => {
                    this.expanding = false;
                    this.message = 'Expansion complete';
                    tabSet.select('results');
                });
            }, (err) => {
                this.results = {
                    resourceType: 'OperationOutcome',
                    text: {
                        status: 'generated',
                        div: 'An error occurred while expanding the value set: ' + err
                    },
                    issue: []
                };
                setTimeout(() => {
                    this.expanding = false;
                    this.message = 'Expansion completed with errors';
                    tabSet.select('results');
                });
            });
    }

    ngOnInit() {
        const valueSetId = this.route.snapshot.paramMap.get('id');
        this.valueSetService.get(valueSetId)
            .subscribe((valueSet) => {
                if (valueSet.resourceType !== 'ValueSet') {
                    throw new Error('The specified value set either does not exist or was deleted');
                }

                this.valueSet = <ValueSet> valueSet;
            }, (err) => {
                this.message = 'An error occurred while loading the value set';
            });
    }
}
